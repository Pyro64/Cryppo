import { connect } from "react-redux";
import CryppoLk from "./CryppoLk";
import {
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
    inputChange,
} from "../../Redux/user-reducer";

let mapStateToProps = (state) => {
    return {
        card: state.user.cardData,
        bankCard: state.user.bankCardData,
        invest: state.cryppoLk.investData,
        newCard: state.cryppoLk.newCardData,
        news: state.cryppoLk.newsData,
        operationData: state.user.operationData,
        statistic: state.user.statisticData,
        translations: state.cryppoLk.translationsData,
        tabs: state.cryppoLk.tabsData,
        currency: state.user.currencyStatisticData,
        composition: state.user.compositionData,
        operationModal: state.cryppoLk.operationModal,
        isModal: state.cryppoLk.isModal,
        chartTextData: state.cryppoLk.chartTextData,
        isHover: state.cryppoLk.isHover,
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
