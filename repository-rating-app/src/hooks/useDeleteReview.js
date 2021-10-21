import { useMutation } from "@apollo/client";

import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const [mutation] = useMutation(DELETE_REVIEW);

  const deleteReview = async (repositoryId) => {
    await mutation({
      variables: {
        id: repositoryId
      }
    });
  };

  return [deleteReview];
};

export default useDeleteReview;