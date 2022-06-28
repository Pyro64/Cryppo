import { connect } from "react-redux";
import Balance from "./Balance";
let mapStateToProps = (state) => {
    return {
        doughuntTextData: state.doughunt.doughuntTextData,
        isHover: state.lk.business.isHover,
        expenses: state.doughunt.expenses,
        balances: state.user.business.balances,
    };
};

const BalanceContainer = connect(mapStateToProps, {})(Balance);

export default BalanceContainer;
