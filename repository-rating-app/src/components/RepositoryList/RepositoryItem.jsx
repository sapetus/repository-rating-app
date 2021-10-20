import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import RepositoryStatistic from './RepositoryStatistic';
import RepositoryInfo from './RepositoryInfo';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white"
  },
  topRowContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10
  },
  bottomRowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  itemAvatar: {
    height: 50,
    width: 50,
    borderRadius: 6
  },
  openInButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 15,
    marginTop: 10
  }
});

const RepositoryItem = ({ item, showOpenIn }) => {
  const onPress = () => {
    WebBrowser.openBrowserAsync(item.url);
  };
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topRowContainer}>
        <Image style={styles.itemAvatar} source={{ uri: item?.ownerAvatarUrl }} />
        <RepositoryInfo name={item?.fullName} description={item?.description} language={item?.language} />
      </View>
      <View style={styles.bottomRowContainer}>
        <RepositoryStatistic value={item?.stargazersCount} stat="Stars" />
        <RepositoryStatistic value={item?.forksCount} stat="Forks" />
        <RepositoryStatistic value={item?.reviewCount} stat="Reviews" />
        <RepositoryStatistic value={item?.ratingAverage} stat="Rating" />
      </View>
      {showOpenIn
        ?
        <Pressable onPress={() => onPress()} style={styles.openInButton} >
          <Text color="textTertiary" fontSize="subheading" fontWeight="bold"  >
            Open in GitHub
          </Text>
        </Pressable>
        :
        null}
    </View>
  );
};

export default RepositoryItem;