import { connect } from "react-redux";
import BusinessLkMain from "./BusinessLkMain";
import { setModal, switchModal } from "../../../Redux/Lk-reducer";
import { changeActiveIndex } from "../../../Redux/operation-reducer";
import { PaymentsPostTC } from "../../../Redux/payments-reducer";

let mapStateToProps = (state) => {
  return {
    revenue: state.LK.business.revenue,
    tabs: state.lk.business.tabsData,
    cardList: state.user.business.cardList,
    bankCardList: state.user.business.bankCardList,
    operationList: state.operation.business.operationList,
    operationModal: state.lk.business.operationModal,
    isModal: state.lk.business.isModal,
    filter: false,
    isHover: state.lk.business.isHover,
    doughuntTextData: state.doughunt.doughuntTextData,
    currencyList: state.lk.business.currencyList,
    expenses: state.doughunt.expenses,
    arrival: state.doughunt.arrival,
    paymentList: state.payments.business,
  };
};

const BusinessLkMainContainer = connect(mapStateToProps, {
  setModal,
  switchModal,
  changeActiveIndex,
  PaymentsPostTC,
})(BusinessLkMain);

export default BusinessLkMainContainer;
