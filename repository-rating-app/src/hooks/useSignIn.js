import { useMutation } from "@apollo/client";

import { AUTHORIZE_USER } from "../graphql/mutations";

const useSignIn = () => {
  const [mutation] = useMutation(AUTHORIZE_USER);

  const signIn = async (username, password) => {
    const result = await mutation({ variables: { username: username, password: password } });

    return result;
  };

  return [signIn];
};

export default useSignIn;