import { connect } from "react-redux";
import CryppoBusiness from "./CryppoBusiness";
import { hasLk } from "../../Redux/user-reducer";
import { removeAlert } from "../../Redux/user-reducer";

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
  hasLk,
  removeAlert,
})(CryppoBusiness);

export default CryppoBusinessContainer;
