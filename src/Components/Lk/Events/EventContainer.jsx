import { connect } from "react-redux";
import Event from "./Event";
import { setModal, switchModal } from "../../../Redux/Lk-reducer";
import { setChartText, initChartText } from "../../../Redux/operation-reducer";

let mapStateToProps = (state) => {
    return {
        operationData: state.operation.cryppo.operationData,
        operationList: state.operation.cryppo.operationList,
        operationModal: state.lk.cryppo.operationModal,
        expenses: state.operation.cryppo.operationList,
        arrival: state.operation.cryppo.operationList,
        isModal: state.lk.cryppo.isModal,
        isHover: state.lk.business.isHover,
        chartTextData: state.operation.cryppo.chartTextData,
    };
};

const EventContainer = connect(mapStateToProps, {
    setModal,
    switchModal,
    setChartText,
    initChartText,
})(Event);
export default EventContainer;
