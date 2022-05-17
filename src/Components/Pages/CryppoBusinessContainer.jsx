
import { connect } from "react-redux";
import CryppoBusiness from "./CryppoBusiness";
import { authorizationPostThunkCreator,hasLk} from '../../Redux/user-reducer';
import { get, getCryppoBusinessThunkCreator,login } from '../../Redux/cryppoBusiness-reducer';

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
                user: state.user.userData,
                nav: state.cryppoBusinessPage.navData,
                authorizationPost: state.user.authorizationPost,
                router: state.cryppoBusinessPage.router,
                isLk: state.user.isLk
        }
}

const CryppoBusinessContainer = connect(mapStateToProps, { login, get, getCryppoBusinessThunkCreator,
        authorizationPostThunkCreator, hasLk})(CryppoBusiness);

export default CryppoBusinessContainer;