import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useHistory } from 'react-router';

import AppBarTab from './AppBarTab';
import useAuthorizedUser from '../../hooks/useAuthorizedUser';
import useSignOut from '../../hooks/useSignOut';
import theme from '../../theme';

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
  const [signOut] = useSignOut();
  const { authorizedUser } = useAuthorizedUser();
  const history = useHistory();

  const signOutUser = async () => {
    await signOut();
    history.push('/');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" link="/" />
        {authorizedUser
          ? <AppBarTab text="Sign Out" onPress={signOutUser} />
          : <AppBarTab text="Sign In" link="/sign-in" />}
      </ScrollView>
    </View>
  );
};

export default AppBar;