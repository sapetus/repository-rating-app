import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router';

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
    .moreThan(-1, 'Rating must be 0 or greater')
    .lessThan(101, 'Rating must be 100 or less')
    .required('Rating is required')
});

const ReviewForm = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, review: text } = values;

    try {
      const { repositoryId } = await createReview(repositoryName, ownerName, parseInt(rating), text);
      history.push(`/repository/${repositoryId}`);
    } catch (error) {
      history.push("/");
      console.log(error);
    }
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