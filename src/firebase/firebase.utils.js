import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBO_OY_pxB3A9RP5pWXoEu-rAw6pkLo6AQ',
  authDomain: 'rethja-clothing.firebaseapp.com',
  databaseURL: 'https://rethja-clothing.firebaseio.com',
  projectId: 'rethja-clothing',
  storageBucket: 'rethja-clothing.appspot.com',
  messagingSenderId: '398271737412',
  appId: '1:398271737412:web:8c876bd919daf4f0555611',
  measurementId: 'G-HG7QP97M8N',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user: ', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;