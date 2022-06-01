import { connect } from "react-redux";
import CryppoLk from "./CryppoLk";
import {
  filterOperationsTC,
  disableItem,
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
  filterOperationsTC,
  disableItem,
})(CryppoLk);
export default CryppoLkContainer;
