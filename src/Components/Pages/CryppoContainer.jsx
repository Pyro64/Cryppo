import { connect } from "react-redux";
import { get, getCryppoThunkCreator } from "../../Redux/cryppo-reducer";
import Cryppo from "./Cryppo";
import {login} from "../../Redux/cryppo-reducer";
let mapStateToProps = (state) => {
  return {
    logo: state.cryppoPage.route.logo,
    btn: state.cryppoPage.route.btn,
    isLogin: state.cryppoPage.isLogin,
    user: state.user.userData,
    nav: state.cryppoPage.navData,
    router: state.cryppoPage.router
  };
};

const CryppoContainer = connect(mapStateToProps, { login, get, getCryppoThunkCreator })(Cryppo);
export default CryppoContainer;
