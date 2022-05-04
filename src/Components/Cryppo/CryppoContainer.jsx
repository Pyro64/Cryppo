import { connect } from "react-redux";
import {login} from "../../Redux/user-reducer";
import { get, getCryppoThunkCreator } from "../../Redux/cryppo-reducer";
import Cryppo from "./Cryppo";

let mapStateToProps = (state) => {
  return {
    logo: state.link.route.logo,
    btn: state.link.route.btn,
    isLogin: state.user.isLogin,
    user: state.user.userData,
    nav: state.link.navData,
  };
};

const CryppoContainer = connect(mapStateToProps, { login, get, getCryppoThunkCreator })(Cryppo);
export default CryppoContainer;
