import React from 'react';
import { useParams } from 'react-router';
import { FlatList } from 'react-native';

import useRepository from '../../hooks/useRepository';
import Review from './Review';
import RepositoryItem from '../RepositoryList/RepositoryItem';

const Repository = () => {
  const { id } = useParams();

  const { repository, fetchMore } = useRepository({
    id: id,
    first: 10
  });

  const onEndReach = () => {
    fetchMore();
  };

  const reviewNodes = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

  return <FlatList
    data={reviewNodes}
    renderItem={({ item }) => <Review review={item} />}
    keyExtractor={({ id }) => id}
    ListHeaderComponent={() => <RepositoryItem item={repository} showOpenIn={true}/>}
    onEndReached={onEndReach}
    onEndReachedThreshold={0.5}
  />;
};

export default Repository;