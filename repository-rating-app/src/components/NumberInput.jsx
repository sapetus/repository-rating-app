import React from 'react';
import { TextInput as NativeTextInput } from 'react-native';

const NumberInput = ({ style, ...props }) => {
  return (
    <NativeTextInput
      {...props}
      style={style}
      keyboardType='numeric'
    />
  );
};

export default NumberInput;