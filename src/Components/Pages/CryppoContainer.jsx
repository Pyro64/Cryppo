import { connect } from "react-redux";
import { get, getCryppoThunkCreator,login } from "../../Redux/cryppo-reducer";
import Cryppo from "./Cryppo";
import {hasLk} from '../../Redux/user-reducer'
let mapStateToProps = (state) => {
  return {
    logo: state.cryppoPage.route.logo,
    btn: state.cryppoPage.route.btn,
    isLogin: state.cryppoPage.isLogin,
    user: state.user.userData,
    nav: state.cryppoPage.navData,
    router: state.cryppoPage.router,
    isLk: state.user.isLk
  };
};

const CryppoContainer = connect(mapStateToProps, { login, get, getCryppoThunkCreator,hasLk })(Cryppo);
export default CryppoContainer;
