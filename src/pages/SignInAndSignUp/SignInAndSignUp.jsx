import React from 'react';

import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

import './SignInAndSignUp.styles.scss';

const SignInAndSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
