
import { connect } from "react-redux";
import CryppoBusiness from "./CryppoBusiness";
import { login } from '../../Redux/cryppoBusiness-reducer';


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
        }
}

const CryppoBusinessContainer = connect(mapStateToProps, { login })(CryppoBusiness);

export default CryppoBusinessContainer;