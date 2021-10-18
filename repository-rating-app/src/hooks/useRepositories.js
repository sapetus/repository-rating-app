import { useQuery } from '@apollo/client';

import {
  GET_REPOSITORIES
} from '../graphql/queries';

const useRepositories = ({ orderBy, orderDirection }) => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: orderBy,
      orderDirection: orderDirection
    }
  });

  return {
    repositories: data?.repositories, loading, refetch
  };
};

export default useRepositories;