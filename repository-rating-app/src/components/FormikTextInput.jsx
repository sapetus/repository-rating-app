import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: theme.colors.backgroundColor,
    borderRadius: 4,
    marginTop: 10,
    padding: 10
  },
  inputError: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: theme.colors.error,
    borderRadius: 4,
    marginTop: 10,
    padding: 10
  }
});

const FormikTextInput = ({ name, isSecret, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={showError ? styles.inputError : styles.input}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        secureTextEntry={isSecret}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;