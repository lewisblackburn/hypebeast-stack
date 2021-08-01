import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "../../generated/graphql";

export const useNotVerifyLoggedIn = () => {
  const { data, loading } = useMeQuery();
  const router = useRouter();

  useEffect(() => {
    // if logged in push to home
    if (!loading && data?.me) router.push("/");
  }, [loading, data, router]);
};
