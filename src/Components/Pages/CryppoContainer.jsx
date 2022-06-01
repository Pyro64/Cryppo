import {connect} from "react-redux";
import Cryppo from "./Cryppo";
import {
    hasLk,
    removeAlert,
    LoginWalletPostTC,
    RegistrationWalletPostTC
} from "../../Redux/user-reducer";

let mapStateToProps = (state) => {
    return {
        logo: state.header.cryppo.route.logo,
        btn: state.header.cryppo.route.btn,
        isLogin: state.user.cryppo.isLogin,
        user: state.user.cryppo.userData,
        nav: state.header.cryppo.navData,
        isLk: state.user.isLk,
        card: state.operation.cryppo.cardData,
        alert: state.lk.cryppo.alertData,
    };
};

const CryppoContainer = connect(mapStateToProps, {
    hasLk,
    LoginWalletPostTC,
    RegistrationWalletPostTC,
    removeAlert,
})(Cryppo);
export default CryppoContainer;
