import { connect } from "react-redux";
import CryppoLk from "./CryppoLk";

let mapStateToProps = (state) => {
  return {
    card: state.cryppoIndexLk.cardData,
    bankCard: state.cryppoIndexLk.bankCardData,
    invest: state.cryppoLk.investData,
    newCard: state.cryppoLk.newCardData,
    tabs: state.cryppoLk.tabsData,
    operationData: state.cryppoLk.operationData,
    statistic: state.cryppoLk.statisticData,
  };
};

const CryppoLkContainer = connect(mapStateToProps)(CryppoLk);
export default CryppoLkContainer;
