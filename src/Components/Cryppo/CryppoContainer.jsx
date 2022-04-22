import { connect } from "react-redux";
import { login, get, getCryppoThunkCreator } from "../../Redux/cryppo-reducer";
import Cryppo from "./Cryppo";

let mapStateToProps = (state) => {
  return {
    logo: state.cryppoPage.route.logo,
    btn: state.cryppoPage.route.btn,
    isLogin: state.cryppoPage.isLogin,
    user: state.cryppoPage.userData,
    nav: state.cryppoPage.navData,
  };
};

const CryppoContainer = connect(mapStateToProps, { login, get, getCryppoThunkCreator })(Cryppo);
export default CryppoContainer;
