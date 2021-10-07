import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import LoginForm from './LoginForm';
import useSignIn from '../../hooks/useSignIn';

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().min(3, 'Username must be longer').required('Username is required'),
  password: yup.string().min(5, 'Password must be longer').required('Password is required')
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn(username, password);
      console.log(data.authorize.accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit, dirty, isValid }) =>
        <LoginForm onSubmit={handleSubmit} dirty={dirty} isValid={isValid} />}
    </Formik>
  );
};

export default SignIn;