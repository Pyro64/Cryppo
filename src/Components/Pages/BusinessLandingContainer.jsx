import { connect } from "react-redux";
import CryppoBusinessLanding from "./CryppoBusinessLanding";
let mapStateToProps = (state) => {
  return {
    appIcon: state.landing.business.appIconData,
    description: state.landing.business.descriptionData,
    whoSuits: state.landing.business.whoSuitsData,
    about: state.landing.business.aboutData,
    security: state.landing.business.securityData,
    faq: state.landing.business.faqData,
    connectionList: state.landing.business.connectionData.listData,
    banner: state.landing.business.bannerData,
  };
};

const BusinessLandingContainer = connect(
  mapStateToProps,
  {}
)(CryppoBusinessLanding);

export default BusinessLandingContainer;
