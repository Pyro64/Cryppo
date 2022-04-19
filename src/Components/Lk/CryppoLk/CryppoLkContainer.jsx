import { connect } from "react-redux";
import CryppoLk from "./CryppoLk";

let mapStateToProps = (state) => {
  return {
    card: state.cryppoLk.cardData,
    bankCard: state.cryppoLk.bankCardData,
    invest: state.cryppoLk.investData,
    newCard: state.cryppoLk.newCardData,
    news: state.cryppoLk.newsData,
    operationData: state.cryppoLk.operationData,
    statistic: state.cryppoLk.statisticData,
    translations: state.cryppoLk.translationsData,
  };
};

const CryppoLkContainer = connect(mapStateToProps)(CryppoLk);
export default CryppoLkContainer;
