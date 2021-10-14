import { useMutation } from '@apollo/client';

import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutation] = useMutation(CREATE_REVIEW);

  const createReview = async (repositoryName, ownerName, rating, text) => {
    const { data } = await mutation({
      variables: {
        repositoryName: repositoryName,
        ownerName: ownerName,
        rating: rating,
        text: text
      }
    });

    return {
      repositoryId: data?.repositoryId
    };
  };

  return [createReview];
};

export default useCreateReview;