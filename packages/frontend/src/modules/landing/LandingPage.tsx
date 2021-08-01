import React from "react";
import { useCurrentState } from "../../stores/useCurrentState";
import { Layout } from "../layouts/Layout";

interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = ({}) => {
  const { state, setCurrentState } = useCurrentState();

  return <Layout></Layout>;
};
