import React from 'react';

import LoginFormContainer from './LoginFormContainer';
import useSignIn from '../../hooks/useSignIn';
import { useHistory } from 'react-router';

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn(username, password);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return <LoginFormContainer onSubmit={onSubmit} />;
};

export default SignIn;