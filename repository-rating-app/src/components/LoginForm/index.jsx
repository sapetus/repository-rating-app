import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import LoginForm from './LoginForm';

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().min(3, 'Username must be longer').required('Username is required'),
  password: yup.string().min(5, 'Password must be longer').required('Password is required')
});

const SignIn = () => {
  const onSubmit = values => {
    const username = values.username;
    const password = values.password;

    console.log(`Username: ${username}; Password: ${password}`);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit, dirty, isValid }) =>
        <LoginForm onSubmit={handleSubmit} dirty={dirty} isValid={isValid}/>}
    </Formik>
  );
};

export default SignIn;