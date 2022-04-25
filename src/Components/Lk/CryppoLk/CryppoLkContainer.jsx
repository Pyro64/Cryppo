import { connect } from "react-redux";
import CryppoLk from "./CryppoLk";
import { get, getCryppoLkThunkCreator, setModal } from "../../../Redux/cryppoLk-reducer"


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
    tabs: state.cryppoLk.tabsData,
    currency: state.cryppoLk.currencyStatisticData,
    composition: state.cryppoLk.compositionData,
    operationModal: state.cryppoLk.operationModal
  };
};

const CryppoLkContainer = connect(mapStateToProps, {
  get,
  getCryppoLkThunkCreator,
  setModal
})(CryppoLk);
export default CryppoLkContainer;
