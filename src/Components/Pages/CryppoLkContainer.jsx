import { connect } from "react-redux";
import CryppoLk from "./CryppoLk";
import { filterOperationsTC, disableItem } from "../../Redux/user-reducer";

let mapStateToProps = (state) => {
    return {
        card: state.operation.cryppo.cardData,
        bankCard: state.operation.cryppo.bankCardData,
        invest: state.lk.cryppo.investData,
        news: state.lk.cryppo.newsData,
        statistic: state.operation.cryppo.statisticData,
        translations: state.lk.cryppo.translationsData,
        tabs: state.lk.cryppo.tabsData,
        composition: state.operation.cryppo.barData.compositions,
        operationData: state.operation.cryppo.operationData,
        operationModal: state.lk.cryppo.operationModal,
        isModal: state.lk.cryppo.isModal,
        chartTextData: state.operation.cryppo.chartTextData,
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
