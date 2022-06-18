import { connect } from "react-redux";
import Balance from "./Balance";
import {
    initChartText,
    setChartText,
    updateChart,
    disableItem,
} from "../../../Redux/operation-reducer";
let mapStateToProps = (state) => {
    return {
        cardList: state.user.business.cardList,
        chartTextData: state.operation.business.chartTextData,
        currencyList: state.user.business.balances,
        isHover: state.lk.business.isHover,
        expenses: state.operation.business.operationData,
    };
};

const BalanceContainer = connect(mapStateToProps, {
    disableItem,
    updateChart,
    setChartText,
    initChartText,
})(Balance);

export default BalanceContainer;
