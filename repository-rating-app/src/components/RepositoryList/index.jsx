import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#e1e4e8"
  }
});

//these two could go in their separate components
const ItemSeparator = () => <View style={styles.separator} />;
const renderItem = ({ item }) => {
  return (
    <RepositoryItem item={item} />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default RepositoryList;