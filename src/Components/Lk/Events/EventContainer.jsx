import { connect } from "react-redux";
import Event from "./Event";
import { setModal, switchModal } from "../../../Redux/Lk-reducer";

let mapStateToProps = (state) => {
    return {
        operationData: state.operation.cryppo.operationData,
        operationList: state.operation.cryppo.operationList,
        operationModal: state.lk.cryppo.operationModal,
        expenses: state.doughunt.expenses,
        arrival: state.doughunt.arrival,
        isModal: state.lk.cryppo.isModal,
        isHover: state.lk.business.isHover,
        doughuntTextData: state.doughunt.doughuntTextData,
    };
};

const EventContainer = connect(mapStateToProps, {
    setModal,
    switchModal,
})(Event);
export default EventContainer;
