
import { connect } from "react-redux";
import CryppoBusiness from "./CryppoBusiness";


let mapStateToProps = (state) => {
        return {
                appIcon: state.cryppoBusinessPage.appIconData,
                description: state.cryppoBusinessPage.descriptionData,
                whoSuits: state.cryppoBusinessPage.whoSuitsData,
                about: state.cryppoBusinessPage.aboutData,
                security: state.cryppoBusinessPage.securityData,
                faq: state.cryppoBusinessPage.faqData,
                connectionList: state.cryppoBusinessPage.connectionData.listData,
        }
}

const CryppoBusinessContainer = connect(mapStateToProps)(CryppoBusiness);

export default CryppoBusinessContainer;