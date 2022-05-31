import {connect} from "react-redux";
import {
    get,
    getCryppoThunkCreator,
    login,
} from "../../Redux/cryppo-reducer";
import Cryppo from "./Cryppo";
import {
    hasLk,
    removeAlert,
    LoginWalletPostTC,
    RegistrationWalletPostTC
} from "../../Redux/user-reducer";

let mapStateToProps = (state) => {
    return {
        logo: state.cryppoPage.route.logo,
        btn: state.cryppoPage.route.btn,
        isLogin: state.cryppoPage.isLogin,
        user: state.cryppoPage.userData,
        nav: state.cryppoPage.navData,
        router: state.cryppoPage.router,
        isLk: state.user.isLk,
        card: state.user.cardData,
        alert: state.user.alertData,
    };
};

const CryppoContainer = connect(mapStateToProps, {
    login,
    get,
    getCryppoThunkCreator,
    hasLk,
    LoginWalletPostTC,
    RegistrationWalletPostTC,
    removeAlert,
})(Cryppo);
export default CryppoContainer;
