import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import Text from '../Text';

const styles = StyleSheet.create({
  tab: {
    padding: 8,
    margin: 5
  }
});

const AppBarTab = ({ text, link, onPress }) => {
  if (onPress) {
    return (
      <Pressable onPress={onPress} style={styles.tab}>
        <Text color="textTertiary" fontSize="subheading" fontWeight="bold">
          {text}
        </Text>
      </Pressable>
    );
  }

  return (
    <Link to={link} style={styles.tab} >
      <Text color="textTertiary" fontSize="subheading" fontWeight="bold">
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;