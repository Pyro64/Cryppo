import { connect } from "react-redux";
import BusinessLkStatistic from "./BusinessLkStatistic";
import { setModal, switchModal } from "../../../Redux/Lk-reducer";
import {
    initChartText,
    setChartText,
    updateChart,
    changeActiveIndex,
    disableItem,
} from "../../../Redux/operation-reducer";
let mapStateToProps = (state) => {
    return {
        barData: state.operation.business.barData,
        isModal: state.lk.business.isModal,
        operationModal: state.lk.business.operationModal,
        filter: false,
        cardList:state.user.business.cardList,
        chartTextData: state.operation.business.chartTextData,
        currencyList: state.lk.business.currencyList,
        isHover: state.lk.business.isHover,
        expenses: state.operation.business.operationData,
        arrival: state.operation.business.operationData,
    };
};

const BusinessLkStatisticContainer = connect(mapStateToProps, {
    disableItem,
    updateChart,
    setChartText,
    initChartText,
    changeActiveIndex,
    setModal,
    switchModal

})(BusinessLkStatistic);

export default BusinessLkStatisticContainer;
