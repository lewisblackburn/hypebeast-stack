import React from "react";
import { useCurrentState } from "../../stores/useCurrentState";
import { useVerifyLoggedIn } from "../auth/useVerifyLoggedIn";

interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = ({}) => {
  useVerifyLoggedIn();
  const { state, setCurrentState } = useCurrentState();

  return (
    <div>
      <button onClick={() => setCurrentState(state + 1)}>count</button>
      {state}
    </div>
  );
};
