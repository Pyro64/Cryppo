import { connect } from "react-redux";
import BusinessLkHistory from "./BusinessLkHistory";
import { hasLk, removeAlert } from "../../../Redux/user-reducer";
import { setModal, switchModal } from "../../../Redux/Lk-reducer";
import {
    filterValute,
    filterWallet,
    filterDate,
} from "../../../Redux/operation-reducer";
import { PaymentsPostTC } from "../../../Redux/payments-reducer";

let mapStateToProps = (state) => {
    return {
        paymentList: state.payments.business,
        operationList: state.operation.business.operationList,
        operationModal: state.lk.business.operationModal,
        isModal: state.lk.business.isModal,
        currencyList: state.user.business.balances,
    };
};

const BusinessLkHistoryContainer = connect(mapStateToProps, {
    hasLk,
    removeAlert,
    setModal,
    switchModal,
    filterValute,
    filterWallet,
    filterDate,
    PaymentsPostTC,
})(BusinessLkHistory);

export default BusinessLkHistoryContainer;
