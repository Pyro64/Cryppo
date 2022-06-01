import { connect } from "react-redux";
import BusinessLkHistory from "./BusinessLkHistory";
import { hasLk, removeAlert } from "../../../Redux/user-reducer";
import {
    setModal,switchModal,
} from "../../../Redux/Lk-reducer";
import { filterValute, filterWallet, filterDate} from "../../../Redux/operation-reducer"

let mapStateToProps = (state) => {
  return {
      operationList: state.operation.business.operationList,
      operationModal: state.lk.business.operationModal,
      isModal: state.lk.business.isModal,
      currencyList: state.lk.business.currencyList,
  };
};

const BusinessLkHistoryContainer = connect(mapStateToProps, {
  hasLk,
  removeAlert,
    setModal,switchModal,filterValute, filterWallet, filterDate
})(BusinessLkHistory);

export default BusinessLkHistoryContainer;
