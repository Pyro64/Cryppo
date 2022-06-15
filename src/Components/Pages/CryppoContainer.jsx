import { connect } from "react-redux";
import Cryppo from "./Cryppo";
import {
    removeAlert,
    LoginWalletPostTC,
    RegistrationWalletPostTC,
} from "../../Redux/user-reducer";

let mapStateToProps = (state) => {
    return {
        logo: state.header.cryppo.route.logo,
        isLogin: state.user.cryppo.isLogin,
        header: state.header.cryppo,
        user: state.user.cryppo,
        isLk: state.user.isLk,
        card: state.operation.cryppo.cardData,
        alert: state.lk.cryppo.alertData,
        routeLk: state.header.cryppo.route.routeLk,
    };
};

const CryppoContainer = connect(mapStateToProps, {
    LoginWalletPostTC,
    RegistrationWalletPostTC,
    removeAlert,
})(Cryppo);
export default CryppoContainer;
