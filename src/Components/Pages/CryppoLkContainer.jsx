import { connect } from "react-redux";
import CryppoLk from "./CryppoLk";
import {
<<<<<<< HEAD
    get,
    getCryppoLkThunkCreator,
    setModal,
    switchModal,
    setChartText,
    initChartText
} from "../../Redux/cryppoLk-reducer";
import {
    changeActiveIndex,
    filterOperationsThunkCreator,
    updateChart,
    addTag,
    removeTag,
    inputChange,disableItem
=======
  get,
  getCryppoLkThunkCreator,
  setModal,
  switchModal,
  setChartText,
  initChartText,
} from "../../Redux/cryppoLk-reducer";
import {
  changeActiveIndex,
  filterOperationsThunkCreator,
  updateChart,
  addTag,
  removeTag,
  inputChange,
>>>>>>> 19bb3b905a449722f23fc94f1c259db682cddd47
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
  };
};

const CryppoLkContainer = connect(mapStateToProps, {
<<<<<<< HEAD
    get,
    getCryppoLkThunkCreator,
    setModal,
    switchModal,
    setChartText,
    initChartText,
    changeActiveIndex,
    addTag,
    removeTag,
    filterOperationsThunkCreator,
    inputChange,
    updateChart,
    disableItem
=======
  get,
  getCryppoLkThunkCreator,
  setModal,
  switchModal,
  setChartText,
  initChartText,
  changeActiveIndex,
  addTag,
  removeTag,
  filterOperationsThunkCreator,
  inputChange,
  updateChart,
>>>>>>> 19bb3b905a449722f23fc94f1c259db682cddd47
})(CryppoLk);
export default CryppoLkContainer;
