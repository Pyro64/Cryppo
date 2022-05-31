import {connect} from "react-redux";
import CryppoBusiness from "./CryppoBusiness";
import {
    LoginBusinessPostTC, RegistrationBusinessPostTC, hasLk, removeAlert,
} from "../../Redux/user-reducer";
import {
    get, getCryppoBusinessThunkCreator, login, registryThunkCreator,
} from "../../Redux/cryppoBusiness-reducer";

let mapStateToProps = (state) => {
  return {
    header: state.header.business,
    isLogin: state.user.business.isLogin,
    isLk: state.user.isLk,
    user: state.user.business,
    logo: state.header.business.route.logo,
    card: state.operation.cryppo.cardData,
    alert: state.lk.business.alertData,
  };
};

const CryppoBusinessContainer = connect(mapStateToProps, {
    login, get, getCryppoBusinessThunkCreator, LoginBusinessPostTC, hasLk, RegistrationBusinessPostTC, removeAlert,
})(CryppoBusiness);

export default CryppoBusinessContainer;
