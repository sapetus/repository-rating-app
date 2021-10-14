import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Form from './Form';
import useCreateReview from '../../hooks/useCreateReview';

const styles = StyleSheet.create({
  form: {
    backgroundColor: "white",
    paddingBottom: 10
  }
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  review: ''
};

const validationSchema = yup.object().shape({
  ownerName: yup.string()
    .required('Repository owner name is required'),
  repositoryName: yup.string()
    .required('Repository name is required'),
  rating: yup.number()
    .typeError('Rating must be a number between 0 and 100')
    .moreThan(0, 'Rating must be more than 0')
    .lessThan(100, 'Rating must be less than 100')
    .required('Rating is required')
});

const ReviewForm = () => {
  const onSubmit = () => {
    console.log('creating a review...');
  };

  return (
    <View style={styles.form}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
        {({ handleSubmit, dirty, isValid }) =>
          <Form onSubmit={handleSubmit} dirty={dirty} isValid={isValid} />}
      </Formik>
    </View>
  );
};

export default ReviewForm;