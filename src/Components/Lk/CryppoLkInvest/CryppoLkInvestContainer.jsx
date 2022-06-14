import { connect } from "react-redux";
import CryppoLkInvest from "./CryppoLkInvest";

let mapStateToProps = (state) => {
    return {
        tabs: state.lk.cryppo.tabsData,
        barData: state.operation.cryppo.barData,
    };
};

const CryppoLkInvestContainer = connect(mapStateToProps, {})(CryppoLkInvest);

export default CryppoLkInvestContainer;
