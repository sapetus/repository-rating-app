import { useQuery } from '@apollo/client';

import { AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = () => {
  const { data, loading, refetch } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network'
  });

  return {
    authorizedUser: data?.authorizedUser, loading, refetch
  };
};

export default useAuthorizedUser;