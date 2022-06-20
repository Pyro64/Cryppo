import { connect } from "react-redux";
import CryppoBusiness from "./CryppoBusiness";
import {
    LoginBusinessPostTC,
    RegistrationBusinessPostTC,
} from "../../Redux/user-reducer";

let mapStateToProps = (state) => {
    return {
        header: state.header.business,
        isLogin: state.user.business.isLogin,
        isLk: state.user.isLk,
        user: state.user.business,
        logo: state.header.business.route.logo,
        routeLk: state.header.business.route.routeLk,
        card: state.operation.cryppo.cardData,
        addCard: state.lk.cryppo.addTerminal,
        alert: state.lk.business.alertData,
    };
};

const CryppoBusinessContainer = connect(mapStateToProps, {
    LoginBusinessPostTC,
    RegistrationBusinessPostTC,
})(CryppoBusiness);

export default CryppoBusinessContainer;
