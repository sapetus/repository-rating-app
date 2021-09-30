import React from 'react';
import { StyleSheet, Pressable } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    padding: 8,
    margin: 5
  }
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable onPress={() => console.log(`My name is ${text}`)} style={styles.tab}>
      <Text color="textTertiary" fontSize="subheading" fontWeight="bold">
        {text}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;