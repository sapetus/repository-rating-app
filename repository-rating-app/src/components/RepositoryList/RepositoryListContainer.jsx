import React from 'react';
import { FlatList, Pressable } from 'react-native';
import { useHistory } from 'react-router';

import RepositoryItem from './RepositoryItem';

const RepositoryListContainer = ({ repositories }) => {
  const history = useHistory();

  const redirectTo = (id) => {
    history.push(`/repository/${id}`);
  };

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({ item }) => (
        <Pressable onPress={() => redirectTo(item.id)}>
          <RepositoryItem testID="repository" item={item} />
        </Pressable>
      )}
    />
  );
};

export default RepositoryListContainer;