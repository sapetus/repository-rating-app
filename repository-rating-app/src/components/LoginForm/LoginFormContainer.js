import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import LoginForm from './LoginForm';

const styles = StyleSheet.create({
  form: {
    backgroundColor: "white",
    paddingBottom: 10
  }
});

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().min(3, 'Username must be longer').required('Username is required'),
  password: yup.string().min(5, 'Password must be longer').required('Password is required')
});

const LoginFormContainer = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
        {({ handleSubmit, dirty, isValid }) =>
          <LoginForm onSubmit={handleSubmit} dirty={dirty} isValid={isValid} />}
      </Formik>
    </View>
  );
};

export default LoginFormContainer;