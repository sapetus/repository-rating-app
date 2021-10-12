import { gql } from '@apollo/client';
import { REPOSITORY_DATA } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_DATA}
  query getRepositories {
    repositories {
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