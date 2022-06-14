import { connect } from "react-redux";
import SupportLk from "./SupportLk";
import { deleteAddress } from "../../../Redux/Lk-reducer";

let mapStateToProps = (state) => {
  return {
    help: state.lk.business.helpData,
  };
};

const SupportLkContainer = connect(mapStateToProps, {
  deleteAddress,
})(SupportLk);

export default SupportLkContainer;
