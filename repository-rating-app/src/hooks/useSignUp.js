import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [mutation] = useMutation(CREATE_USER);

  const signUp = async (username, password) => {
    await mutation({ variables: { username: username, password: password } });
  };

  return [signUp];
};

export default useSignUp;