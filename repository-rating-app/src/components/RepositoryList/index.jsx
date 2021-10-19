import React from 'react';

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';
import { useHistory } from 'react-router';

const RepositoryList = () => {
  const history = useHistory();

  const { repositories, refetch, fetchMore } = useRepositories({
    first: 10
  });

  const onEndReach = () => {
    fetchMore();
  };

  return <RepositoryListContainer
    repositories={repositories}
    refetch={refetch}
    history={history}
    onEndReach={onEndReach}
  />;
};

export default RepositoryList;