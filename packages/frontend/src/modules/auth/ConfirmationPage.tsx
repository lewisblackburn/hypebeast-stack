import {useRouter} from "next/router";
import React, {useEffect} from "react";
import {useConfirmMutation} from "../../generated/graphql";
import {Layout} from "../layouts/Layout";

interface ConfirmationPageProps {}

export const ConfirmationPage: React.FC<ConfirmationPageProps> = ({}) => {
  //useVerifyLoggedIn();

  const router = useRouter();
  const [confirm] = useConfirmMutation();

  const { token } = router.query;

  useEffect(() => {
    if (token)
      confirm({ variables: { token: token.toString() } }).then(() =>
        router.push("/login")
      );
  }, [token]);

  return <Layout>confirmed</Layout>;
};
