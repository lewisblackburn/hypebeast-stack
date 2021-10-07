import React from "react";
import {RegisterForm} from "../../components/Form/RegisterForm";
import {useNotVerifyLoggedIn} from "../auth/useNotVerifyLoggedIn";
import {Layout} from "../layouts/Layout";

interface RegisterPageProps {}

export const RegisterPage: React.FC<RegisterPageProps> = ({}) => {
  useNotVerifyLoggedIn();

  return (
    <Layout>
      <RegisterForm />
    </Layout>
  );
};
