import { connect } from "react-redux";
import { get, getCryppoThunkCreator } from "../../Redux/cryppo-reducer";
import Cryppo from "./Cryppo";
import {login} from "../../Redux/cryppo-reducer";
let mapStateToProps = (state) => {
  return {
    logo: state.link.route.logo,
    btn: state.link.route.btn,
    isLogin: state.cryppoPage.isLogin,
    user: state.user.userData,
    nav: state.link.navData,
  };
};

const CryppoContainer = connect(mapStateToProps, { login, get, getCryppoThunkCreator })(Cryppo);
export default CryppoContainer;
