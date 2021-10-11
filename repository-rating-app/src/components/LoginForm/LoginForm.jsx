import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
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

const LoginForm = ({ onSubmit, dirty, isValid }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput testID="usernameField" name="username" placeholder="Username" isSecret={false} />
      <FormikTextInput testID="passwordField" name="password" placeholder="Password" isSecret={true} />
      <Pressable testID="submitButton" onPress={onSubmit} style={styles.button} disabled={!dirty && isValid}>
        <Text color="textTertiary" fontSize="subheading" fontWeight="bold">
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;