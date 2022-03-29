
import { connect } from "react-redux";
import CryppoBusiness from "./CryppoBusiness";


let mapStateToProps = (state) => {
    return {
        appIcon: state.cryppoBusinessPage.appIconData,
        description: state.cryppoBusinessPage.descriptionData,
        whoSuits: state.cryppoBusinessPage.whoSuitsData,
        about: state.cryppoBusinessPage.aboutData,
        security: state.cryppoBusinessPage.securityData,
    }
}

const CryppoBusinessContainer = connect(mapStateToProps)(CryppoBusiness);

export default CryppoBusinessContainer;