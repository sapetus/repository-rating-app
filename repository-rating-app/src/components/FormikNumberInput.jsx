import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import NumberInput from './NumberInput';
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

const FormikNumberInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <NumberInput
        style={showError ? styles.inputError : styles.input}
        onChangeText={value => helpers.setValue(value)}
        value={field.value}
        onBlur={() => helpers.setTouched(true)}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikNumberInput;