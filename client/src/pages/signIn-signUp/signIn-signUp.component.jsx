import React from 'react';

import SignIn from '../../components/signIn/sign-in.component';
import SignUp from '../../components/signUp/sign-up.component';

import { SignInAndSignUpContainer } from './signIn-signUp.styles';

const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;