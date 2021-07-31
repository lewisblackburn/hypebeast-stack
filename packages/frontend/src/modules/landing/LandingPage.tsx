import React from "react";
import { LoginForm } from "../../components/Form/LoginForm";
import { useCurrentState } from "../../stores/useCurrentState";
import { Layout } from "../layouts/Layout";

interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = ({}) => {
  const { state, setCurrentState } = useCurrentState();

  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};
