import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { useLogoutMutation } from "../../generated/graphql";
import { useCurrentState } from "../../stores/useCurrentState";
import { useVerifyLoggedIn } from "../auth/useVerifyLoggedIn";
import { Layout } from "../layouts/Layout";

interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = ({}) => {
  useVerifyLoggedIn();

  const { state, setCurrentState } = useCurrentState();
  const router = useRouter();
  const [logout] = useLogoutMutation();
  const apolloClient = useApolloClient();

  return (
    <Layout>
      <button
        onClick={async () => {
          await logout().then(() => router.push("/login"));
          await apolloClient.resetStore();
        }}
        className="bg-purple-400 text-white px-4 py-1"
      >
        logout
      </button>
    </Layout>
  );
};
