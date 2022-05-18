import { connect } from "react-redux";
import {
    setModal,
    switchModal,
    setChartText,
    initChartText
} from "../../Redux/cryppoLk-reducer";
import { updateChart, changeActiveIndex } from "../../Redux/user-reducer"
import BusinessLk from './BusinessLk'
let mapStateToProps = (state) => {
    return {
        historyItem: state.businessLk.historyItem,
        card: state.user.cardData,
        operationData: state.user.operationData,
        operationModal: state.cryppoLk.operationModal,
        isModal: state.cryppoLk.isModal,
        composition: state.user.compositionData,
        isHover: state.cryppoLk.isHover,
        chartTextData: state.cryppoLk.chartTextData,
        expenses: state.user.expensesStatisticData,
        arrival: state.user.arrivalStatisticData,
        cashOption: state.businessLk.cashOption
    }
}

const BusinessLkContainer = connect(mapStateToProps, { switchModal, setModal, updateChart, setChartText, initChartText, changeActiveIndex })(BusinessLk);

export default BusinessLkContainer;