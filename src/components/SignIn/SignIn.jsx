import React, { Component } from 'react';

import CustomButton from '../CustomButton';
import FormInput from '../FormInput';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (evt) => {
    const { value, name } = evt.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='email'
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
