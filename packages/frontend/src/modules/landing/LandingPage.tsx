import {useApolloClient} from "@apollo/client";
import {useRouter} from "next/router";
import React from "react";
import toast from "react-hot-toast";
import {Avatar} from "../../components/Avatar";
import {
  UploadType,
  useLogoutMutation,
  useMeQuery,
  useUploadMutation
} from "../../generated/graphql";
import {useVerifyLoggedIn} from "../auth/useVerifyLoggedIn";
import {Layout} from "../layouts/Layout";

interface LandingPageProps {}
interface AvatarUploadProps {
  refetch: any;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ refetch }) => {
  const [upload] = useUploadMutation();

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event: any) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event: any) => {
    const fileUploaded = event.target.files[0];
    upload({
      variables: { file: fileUploaded, type: UploadType.Avatar },
    })
      .then(() => refetch())
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <button
        onClick={(e) => handleClick(e)}
        className="bg-purple-400 text-white px-4 py-1"
      >
        upload avatar
      </button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={(e) => handleChange(e)}
        style={{ display: "none" }}
      />
    </div>
  );
};

export const LandingPage: React.FC<LandingPageProps> = ({}) => {
  useVerifyLoggedIn();

  const router = useRouter();
  const { data, refetch } = useMeQuery();
  const [logout] = useLogoutMutation();
  const apolloClient = useApolloClient();

  if (data?.me) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center space-y-5">
          <Avatar url={data?.me.avatar} />
          <AvatarUpload refetch={refetch} />
          <button
            onClick={async () => {
              await logout().then(() => router.push("/login"));
              await apolloClient.resetStore();
            }}
            className="bg-purple-400 text-white px-4 py-1"
          >
            logout
          </button>
        </div>
      </Layout>
    );
  }

  return null;
};
