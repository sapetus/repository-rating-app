import React from 'react';

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';

const RepositoryList = () => {
  const { repositories, refetch } = useRepositories({
    orderBy: "CREATED_AT",
    orderDirection: "DESC"
  });

  return <RepositoryListContainer repositories={repositories} refetch={refetch} />;
};

export default RepositoryList;