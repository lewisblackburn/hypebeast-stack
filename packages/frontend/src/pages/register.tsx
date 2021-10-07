import withApollo from "../lib/withApollo";
import {RegisterPage} from "../modules/register/RegisterPage";

export default withApollo({ ssr: false })(RegisterPage);
