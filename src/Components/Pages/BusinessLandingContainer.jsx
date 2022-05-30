import { connect } from "react-redux";
import CryppoBusinessLanding from "./CryppoBusinessLanding";
let mapStateToProps = (state) => {
  return {
    appIcon: state.landing.business.appIcon,
    description: state.landing.business.description,
    whoSuits: state.landing.business.whoSuits,
    about: state.landing.business.about,
    security: state.landing.business.security,
    faq: state.landing.business.faq,
    connectionList: state.landing.business.connectionList,
    banner: state.landing.business.banner,
    logo: state.landing.business.logo,
  };
};

const BusinessLandingContainer = connect(
  mapStateToProps,
  {}
)(CryppoBusinessLanding);

export default BusinessLandingContainer;
