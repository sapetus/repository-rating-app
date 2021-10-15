import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList/index';
import Repository from './Repository';
import AppBar from './AppBar/index';
import SignIn from './LoginForm/index';
import ReviewForm from './ReviewForm/index';
import SignUpForm from './SignUpForm';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.backgroundColorLight
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.backgroundColor}/>
      <AppBar />
      <Switch>
        <Route path="/create-review" exact>
          <ReviewForm />
        </Route>
        <Route path="/repository/:id" exact>
          <Repository />
        </Route>
        <Route path="/sign-in" exact>
          <SignIn />
        </Route>
        <Route path="/sign-up" exact>
          <SignUpForm />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;