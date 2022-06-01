import { connect } from "react-redux";
import {
    setModal,
    switchModal,
    setChartText,
    initChartText,
} from "../../Redux/Lk-reducer";
import {
    updateChart,
    changeActiveIndex,
    disableItem,

} from "../../Redux/operation-reducer";
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
        connectOption: state.businessLk.connectOption,
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
    deleteAddress,
    disableItem,
})(BusinessLk);

export default BusinessLkContainer;
