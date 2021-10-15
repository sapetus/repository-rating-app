import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

import FormikTextInput from '../FormikTextInput';
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
      <FormikTextInput name="username" placeholder="Username" isSecret={false} />
      <FormikTextInput name="password" placeholder="Password" isSecret={true} />
      <FormikTextInput name="passwordConfirmation" placeholder="Confirm Password" isSecret={true} />
      <Pressable onPress={onSubmit} disabled={!dirty && isValid} style={styles.button}>
        <Text color="textTertiary" fontSize="subheading" fontWeight="bold">
          Sign Up
        </Text>
      </Pressable>
    </View>
  );
};

export default Form;