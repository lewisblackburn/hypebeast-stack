import React from "react";
import { useCurrentState } from "../../stores/useCurrentState";

interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = ({}) => {
  const { state, setCurrentState } = useCurrentState();

  return (
    <div>
      <button onClick={() => setCurrentState(state + 1)}>count</button>
      {state}
    </div>
  );
};
