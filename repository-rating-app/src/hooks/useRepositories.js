import { useQuery } from '@apollo/client';

import {
  GET_REPOSITORIES
} from '../graphql/queries';

const useRepositories = (variables) => {
  const { data, loading, refetch, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      ...variables
    }
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables
      }
    });
  };

  return {
    repositories: data?.repositories,
    loading,
    refetch,
    fetchMore: handleFetchMore
  };
};

export default useRepositories;