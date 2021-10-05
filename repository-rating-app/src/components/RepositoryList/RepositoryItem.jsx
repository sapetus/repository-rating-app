import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import RepositoryStatistic from './RepositoryStatistic';
import RepositoryInfo from './RepositoryInfo';

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    margin: 10
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
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topRowContainer}>
        <Image style={styles.itemAvatar} source={{ uri: item.ownerAvatarUrl }} />
        <RepositoryInfo name={item.fullName} description={item.description} language={item.language} />
      </View>
      <View style={styles.bottomRowContainer}>
        <RepositoryStatistic value={item.stargazersCount} stat="Stars" />
        <RepositoryStatistic value={item.forksCount} stat="Forks" />
        <RepositoryStatistic value={item.reviewCount} stat="Reviews" />
        <RepositoryStatistic value={item.ratingAverage} stat="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;