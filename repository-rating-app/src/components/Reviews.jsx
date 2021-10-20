import React from 'react';
import { FlatList } from 'react-native';

import Review from './Repository/Review';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

const Reviews = () => {
  const { authorizedUser, fetchMore } = useAuthorizedUser({
    includeReviews: true,
    first: 10
  });

  const onEndReach = () => {
    fetchMore();
  };

  const reviewNodes = authorizedUser
    ? authorizedUser.reviews.edges.map(edge => edge.node)
    : [];

  return <FlatList
    data={reviewNodes}
    renderItem={({ item }) => <Review review={item} myReview={true} />}
    keyExtractor={({ id }) => id}
    onEndReached={onEndReach}
    onEndReachedThreshold={0.5}
  />;
};

export default Reviews;