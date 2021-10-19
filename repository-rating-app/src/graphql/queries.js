import { gql } from '@apollo/client';
import { REPOSITORY_DATA } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_DATA}
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy!
    $orderDirection: OrderDirection!
    $searchKeyword: String
    $after: String
    $first: Int
  ) {
    repositories(
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword,
      after: $after,
      first: $first
      ) {
      edges {
        node {
          ...RepositoryData
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`;

export const GET_REPOSITORIES_LATEST = gql`
  ${REPOSITORY_DATA}
  query getRepositories {
    repositories (orderBy: CREATED_AT) {
      edges {
        node {
          ...RepositoryData
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query authorizedUser {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${REPOSITORY_DATA}
  query getRepository($id: ID!) {
    repository(id: $id) {
      ...RepositoryData
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;