import { connect } from "react-redux";
import CryppoLk from "./CryppoLk";
import {
    get,
    getCryppoLkThunkCreator,
    setModal,
    switchModal,

} from "../../../Redux/cryppoLk-reducer";
import { setChartText, initChartText } from "../../../Redux/interface-reducer";
import {
    changeActiveIndex,
    filterOperationsThunkCreator,
    updateChart,
    addTag,
    removeTag,
    inputChange,
} from "../../../Redux/user-reducer";

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
        operationsFilter: state.user.operationsFilter,
        templateStatisticData: state.user.templateStatisticData
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
    filterOperationsThunkCreator,
    inputChange,
    updateChart
})(CryppoLk);
export default CryppoLkContainer;
