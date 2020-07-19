import React from 'react';

import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

import { SignInAndSignUpContainer } from './SignInAndSignUpPage.styles';

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default SignInAndSignUpPage;
