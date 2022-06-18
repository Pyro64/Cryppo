import { connect } from "react-redux";
import BusinessLkMain from "./BusinessLkMain";
import { hasLk, removeAlert } from "../../../Redux/user-reducer";
import { setModal, switchModal } from "../../../Redux/Lk-reducer";
import {
    initChartText,
    setChartText,
    updateChart,
    changeActiveIndex,
    disableItem,
} from "../../../Redux/operation-reducer";
import { PaymentsPostTC } from "../../../Redux/payments-reducer";

let mapStateToProps = (state) => {
    return {
        revenue: state.LK.business.revenue,
        barData: state.operation.business.barData,
        tabs: state.lk.business.tabsData,
        cardList: state.user.business.cardList,
        bankCardList: state.user.business.bankCardList,
        operationList: state.operation.business.operationList,
        operationModal: state.lk.business.operationModal,
        isModal: state.lk.business.isModal,
        filter: false,
        isHover: state.lk.business.isHover,
        chartTextData: state.operation.business.chartTextData,
        currencyList: state.lk.business.currencyList,
        expenses: state.lk.business.expenses,
        paymentList: state.payments.business,
    };
};

const BusinessLkMainContainer = connect(mapStateToProps, {
    hasLk,
    removeAlert,
    setModal,
    switchModal,
    initChartText,
    setChartText,
    disableItem,
    changeActiveIndex,
    PaymentsPostTC,
})(BusinessLkMain);

export default BusinessLkMainContainer;
