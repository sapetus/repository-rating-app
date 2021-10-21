import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useHistory } from 'react-router';

import AppBarTab from './AppBarTab';
import useAuthorizedUser from '../../hooks/useAuthorizedUser';
import useSignOut from '../../hooks/useSignOut';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: theme.colors.backgroundColor,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
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
          ? <AppBarTab text="Create a Review" link="/create-review" />
          : null}
        {authorizedUser
          ? <AppBarTab text="My reviews" link="/user-reviews" />
          : null}
        {authorizedUser
          ? <AppBarTab text="Sign Out" onPress={signOutUser} />
          : <AppBarTab text="Sign In" link="/sign-in" />}
        {authorizedUser
          ? null
          : <AppBarTab text="Sign Up" link="/sign-up" />}
      </ScrollView>
    </View>
  );
};

export default AppBar;