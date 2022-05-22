import { connect } from "react-redux";
import CryppoBusiness from "./CryppoBusiness";
import {
  authorizationPostThunkCreator,
  hasLk,
  removeAlert,
} from "../../Redux/user-reducer";
import {
  get,
  getCryppoBusinessThunkCreator,
  login,
  loginThunkCreator,
  registryThunkCreator,
} from "../../Redux/cryppoBusiness-reducer";

let mapStateToProps = (state) => {
  return {
    appIcon: state.cryppoBusinessPage.appIconData,
    description: state.cryppoBusinessPage.descriptionData,
    whoSuits: state.cryppoBusinessPage.whoSuitsData,
    about: state.cryppoBusinessPage.aboutData,
    security: state.cryppoBusinessPage.securityData,
    faq: state.cryppoBusinessPage.faqData,
    connectionList: state.cryppoBusinessPage.connectionData.listData,
    banner: state.cryppoBusinessPage.bannerData,
    isLogin: state.cryppoBusinessPage.isLogin,
    logo: state.cryppoBusinessPage.route.logo,
    btn: state.cryppoBusinessPage.route.btn,
    user: state.cryppoBusinessPage.userData,
    nav: state.cryppoBusinessPage.navData,
    authorizationPost: state.user.authorizationPost,
    router: state.cryppoBusinessPage.router,
    isLk: state.user.isLk,
    card: state.businessLk.cardData,
    alert: state.user.alertData,
  };
};

const CryppoBusinessContainer = connect(mapStateToProps, {
  login,
  get,
  getCryppoBusinessThunkCreator,
  authorizationPostThunkCreator,
  hasLk,
  loginThunkCreator,
  registryThunkCreator,
  removeAlert,
})(CryppoBusiness);

export default CryppoBusinessContainer;
