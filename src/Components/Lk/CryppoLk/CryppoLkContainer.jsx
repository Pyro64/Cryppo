import { connect } from "react-redux";
import CryppoLk from "./CryppoLk";
import { get, getCryppoLkThunkCreator, setModal, switchModal } from "../../../Redux/cryppoLk-reducer";
import { setChartText, initChartText } from "../../../Redux/interface-reducer";

 
let mapStateToProps = (state) => {
  return {
    card: state.user.cardData,
    bankCard: state.user.bankCardData,
    invest: state.cryppoLk.investData,
    newCard: state.cryppoLk.newCardData,
    news: state.interface.newsData,
    operationData: state.user.operationData,
    statistic: state.user.statisticData,
    translations: state.interface.translationsData,
    tabs: state.cryppoLk.tabsData,
    currency: state.user.currencyStatisticData,
    composition: state.user.compositionData,
    operationModal: state.cryppoLk.operationModal,
    isModal: state.cryppoLk.isModal,
    chartTextData: state.interface.chartTextData,
    isHover: state.interface.isHover,
  };
};

const CryppoLkContainer = connect(mapStateToProps, {
  get,
  getCryppoLkThunkCreator,
  setModal,
  switchModal,
  setChartText,
  initChartText,
})(CryppoLk);
export default CryppoLkContainer;
