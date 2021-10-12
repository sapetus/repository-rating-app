import React from 'react';
import { useParams } from 'react-router';

import RepositoryItem from './RepositoryList/RepositoryItem';
import useRepository from '../hooks/useRepository';
import { FlatList } from 'react-native';

import Review from './Review';

const Repository = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  if (loading) {
    return null;
  } else {
    const reviewNodes = repository.reviews.edges.map(edge => edge.node);
    
    return (
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <Review review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryItem item={repository} showOpenIn={true} />}
      />
    );
  }
};

export default Repository;