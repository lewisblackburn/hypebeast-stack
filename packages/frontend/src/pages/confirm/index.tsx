import withApollo from "../../lib/withApollo";
import {Layout} from "../../modules/layouts/Layout";

const Confirm: React.FC = () => {
  return <Layout>check your email</Layout>;
};

export default withApollo({ ssr: false })(Confirm);
