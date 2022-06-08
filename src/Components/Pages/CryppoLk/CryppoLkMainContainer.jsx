import { connect } from "react-redux";
import CryppoLkMain from "./CryppoLkMain";
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
    statistic: state.operation.cryppo.statisticData,
    cardList: state.user.cryppo.cardList,
    bankCardList: state.user.cryppo.bankCardList,
    invest: state.lk.cryppo.investData,
    newCard: state.user.cryppo.cardData,
    news: state.lk.cryppo.newsData,
    expenses: state.operation.cryppo.operationData,
    arrival: state.operation.cryppo.operationData,
    tabs: state.lk.cryppo.tabsData,
    operationData: state.operation.cryppo.operationData,
    operationModal: state.lk.cryppo.operationModal,
    isModal: state.lk.cryppo.isModal,
    filter: false,
    isHover: state.lk.business.isHover,
    chartTextData: state.operation.cryppo.chartTextData,
  };
};

const CryppoLkMainContainer = connect(mapStateToProps, {
  setModal,
  switchModal,
  initChartText,
  setChartText,
  disableItem,
})(CryppoLkMain);

export default CryppoLkMainContainer;
