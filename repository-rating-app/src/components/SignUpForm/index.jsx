import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router';

import Form from './Form';
import useSignUp from '../../hooks/useSignUp';
import useSignIn from '../../hooks/useSignIn';

const styles = StyleSheet.create({
  form: {
    backgroundColor: "white",
    paddingBottom: 10
  }
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: ''
};

const validationSchema = yup.object().shape({
  username: yup.string()
    .min(1, 'Username must be longer')
    .max(30, 'Username must be shorter')
    .required('Username is required'),
  password: yup.string()
    .min(5, 'Password must be longer')
    .max(50, 'Password must be shorter')
    .required('Password is required'),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Needs to match password')
    .required('Password confirmation is required')
});

const SignUpForm = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp(username, password);
      await signIn(username, password);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.form}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit, dirty, isValid }) =>
          < Form onSubmit={handleSubmit} dirty={dirty} isValid={isValid} />}
      </Formik>
    </View>
  );
};

export default SignUpForm;