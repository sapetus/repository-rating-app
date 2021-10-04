import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    height: 100,
    backgroundColor: theme.colors.backgroundColor,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" link="/" />
        <AppBarTab text="Sign In" link="/sign-in" />
      </ScrollView>
    </View>
  );
};

export default AppBar;