import { connect } from "react-redux";
import CryppoLk from "./CryppoLk";
import {
  get,
  getCryppoLkThunkCreator,
  setModal,
  switchModal,
  setChartText,
  initChartText,
} from "../../Redux/cryppoLk-reducer";
import {
  changeActiveIndex,
  filterOperationsTC,
  updateChart,
  addTag,
  removeTag,
  inputChange,
  disableItem,
  filterDate,
} from "../../Redux/user-reducer";

let mapStateToProps = (state) => {
  return {
    card: state.user.cardData,
    bankCard: state.user.bankCardData,
    invest: state.cryppoLk.investData,
    newCard: state.cryppoLk.newCardData,
    news: state.cryppoLk.newsData,
    statistic: state.user.statisticData,
    translations: state.cryppoLk.translationsData,
    tabs: state.cryppoLk.tabsData,
    expenses: state.user.expensesStatisticData,
    arrival: state.user.arrivalStatisticData,
    composition: state.user.compositionData,
    operationData: state.user.operationData,
    operationModal: state.cryppoLk.operationModal,
    isModal: state.cryppoLk.isModal,
    chartTextData: state.cryppoLk.chartTextData,
    isHover: state.cryppoLk.isHover,
    operationsFilter: state.user.operationsFilter,
    templateExpensesStatisticData: state.user.templateExpensesStatisticData,
    templateArrivalStatisticData: state.user.templateArrivalStatisticData,
    isLogin: state.cryppoPage.isLogin,
  };
};

const CryppoLkContainer = connect(mapStateToProps, {
  get,
  getCryppoLkThunkCreator,
  setModal,
  switchModal,
  setChartText,
  initChartText,
  changeActiveIndex,
  addTag,
  removeTag,
  filterOperationsTC,
  inputChange,
  updateChart,
  disableItem,
  filterDate,
})(CryppoLk);
export default CryppoLkContainer;
