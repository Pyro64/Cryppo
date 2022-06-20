import { connect } from "react-redux";
import Balance from "./Balance";
import {
    updateChart
} from "../../../Redux/operation-reducer";
let mapStateToProps = (state) => {
    return {
        cardList: state.user.business.cardList,
        doughuntTextData: state.doughunt.doughuntTextData,
        currencyList: state.user.business.balances,
        isHover: state.lk.business.isHover,
        expenses: state.doughunt.expenses,
    };
};

const BalanceContainer = connect(mapStateToProps, {
    updateChart,
})(Balance);

export default BalanceContainer;
