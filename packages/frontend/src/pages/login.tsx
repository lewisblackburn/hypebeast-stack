import withApollo from "../lib/withApollo";
import { LoginPage } from "../modules/login/LoginPage";

export default withApollo({ ssr: false })(LoginPage);
