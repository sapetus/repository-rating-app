import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import FormikNumberInput from '../FormikNumberInput';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
    marginTop: 10
  }
});

const Form = ({ onSubmit, dirty, isValid }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" isSecret={false} />
      <FormikTextInput name="repositoryName" placeholder="Repository name" isSecret={false} />
      <FormikNumberInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput name="review" placeholder="Review" isSecret={false} multiline={true} />
      <Pressable onPress={onSubmit} disabled={!dirty && isValid} style={styles.button} >
        <Text color="textTertiary" fontSize="subheading" fontWeight="bold">
          Create a review
        </Text>
      </Pressable>
    </View>
  );
};

export default Form;