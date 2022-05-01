
import { connect } from "react-redux";
import CryppoBusiness from "./CryppoBusiness";
import {login, authorizationPostThunkCreator} from '../../Redux/user-reducer';
import { get, getCryppoBusinessThunkCreator } from '../../Redux/cryppoBusiness-reducer';


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
                isLogin: state.user.isLogin,
                logo: state.cryppoBusinessPage.route.logo,
                btn: state.cryppoBusinessPage.route.btn,
                user: state.user.userData,
                nav: state.link.navData,
                authorizationPost: state.user.authorizationPost
        }
}

const CryppoBusinessContainer = connect(mapStateToProps, { login, get, getCryppoBusinessThunkCreator,
        authorizationPostThunkCreator})(CryppoBusiness);

export default CryppoBusinessContainer;