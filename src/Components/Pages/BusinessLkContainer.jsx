import { connect } from "react-redux";
import {
  setModal,
  switchModal,
  setChartText,
  initChartText,
} from "../../Redux/cryppoLk-reducer";
import {
  filterValute,
  filterWallet,
  filterDate,
} from "../../Redux/businessLk-reducer";
import {
  updateChart,
  changeActiveIndex,
  disableItem,
} from "../../Redux/user-reducer";
import BusinessLk from "./BusinessLk";
let mapStateToProps = (state) => {
  return {
    historyItem: state.businessLk.historyItem,
    card: state.user.cardData,
    operationData: state.businessLk.operationData,
    operationModal: state.cryppoLk.operationModal,
    isModal: state.cryppoLk.isModal,
    composition: state.user.compositionData,
    isHover: state.cryppoLk.isHover,
    chartTextData: state.cryppoLk.chartTextData,
    expenses: state.user.expensesStatisticData,
    arrival: state.user.arrivalStatisticData,
    cashOption: state.businessLk.cashOption,
    setting: state.businessLk.settingData,
    alert: state.user.alertData,
    langOption: state.businessLk.langOption,
    user: state.cryppoPage.userData,
    settingOption: state.businessLk.settingOption,
    isLogin: state.cryppoBusinessPage.isLogin,
  };
};

const BusinessLkContainer = connect(mapStateToProps, {
  switchModal,
  setModal,
  updateChart,
  setChartText,
  initChartText,
  changeActiveIndex,
  filterValute,
  filterWallet,
  filterDate,
  disableItem,
})(BusinessLk);

export default BusinessLkContainer;
