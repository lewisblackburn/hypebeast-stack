import withApollo from "../../lib/withApollo";
import {ConfirmationPage} from "../../modules/auth/ConfirmationPage";

export default withApollo({ ssr: false })(ConfirmationPage);
