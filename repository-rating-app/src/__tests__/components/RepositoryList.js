import React from 'react';
import { render } from '@testing-library/react-native';

import RepositoryListContainer from '../../components/RepositoryList/RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    describe('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      let allByTestId = null;

      beforeEach(() => {
        const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
        allByTestId = getAllByTestId;
      });

      it('names', () => {
        const names = allByTestId("repositoryName");
        expect(names[0]).toHaveTextContent("jaredpalmer/formik");
        expect(names[1]).toHaveTextContent("async-library/react-async");
      });

      it('descriptions', () => {
        const descriptions = allByTestId("repositoryDescription");
        expect(descriptions[0]).toHaveTextContent("Build forms in React, without the tears");
        expect(descriptions[1]).toHaveTextContent("Flexible promise-based React data loader");
      });

      it('languages', () => {
        const languages = allByTestId("repositoryLanguage");
        expect(languages[0]).toHaveTextContent("TypeScript");
        expect(languages[1]).toHaveTextContent("JavaScript");
      });

      it('fork counts', () => {
        const forkCounts = allByTestId("Forks");
        expect(forkCounts[0]).toHaveTextContent("1.6k");
        expect(forkCounts[1]).toHaveTextContent("69");
      });

      it('stargazer counts', () => {
        const stargazerCounts = allByTestId("Stars");
        expect(stargazerCounts[0]).toHaveTextContent("21.9k");
        expect(stargazerCounts[1]).toHaveTextContent("1.8k");
      });

      it('rating averages', () => {
        const ratingAverages = allByTestId("Rating");
        expect(ratingAverages[0]).toHaveTextContent("88");
        expect(ratingAverages[1]).toHaveTextContent("72");
      });

      it('review counts', () => {
        const reviewCounts = allByTestId("Reviews");
        expect(reviewCounts[0]).toHaveTextContent("3");
        expect(reviewCounts[1]).toHaveTextContent("3");
      });
    });
  });
});