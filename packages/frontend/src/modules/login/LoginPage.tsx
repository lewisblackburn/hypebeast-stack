import React from "react";
import { LoginForm } from "../../components/Form/LoginForm";
import { useNotVerifyLoggedIn } from "../auth/useNotVerifyLoggedIn";
import { Layout } from "../layouts/Layout";

interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = ({}) => {
  useNotVerifyLoggedIn();

  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};
