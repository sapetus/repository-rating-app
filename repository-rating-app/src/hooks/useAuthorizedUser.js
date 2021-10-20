import { useQuery } from '@apollo/client';

import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = (variables) => {
  const { data, loading, refetch, fetchMore } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: {
      ...variables
    }
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data.authorizedUser.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }
    
    fetchMore({
      variables: {
        after: data.authorizedUser.reviews.pageInfo.endCursor,
        ...variables
      }
    });
  };

  return {
    authorizedUser: data?.authorizedUser,
    loading,
    refetch,
    fetchMore: handleFetchMore
  };
};

export default useAuthorizedUser;