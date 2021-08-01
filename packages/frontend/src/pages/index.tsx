import withApollo from "../lib/withApollo";
import { LandingPage } from "../modules/landing/LandingPage";

export default withApollo({ ssr: true })(LandingPage);
