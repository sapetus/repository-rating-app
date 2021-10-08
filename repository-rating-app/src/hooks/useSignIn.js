import { useMutation, useApolloClient } from "@apollo/client";

import { AUTHORIZE_USER } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [mutation] = useMutation(AUTHORIZE_USER);

  const signIn = async (username, password) => {
    const { data } = await mutation({ variables: { username: username, password: password } });
    await authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();
  };

  return [signIn];
};

export default useSignIn;