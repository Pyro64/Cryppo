import { connect } from "react-redux";
import {
    setModal,
    switchModal,
} from "../../Redux/cryppoLk-reducer";
import BusinessLk from './BusinessLk'
let mapStateToProps = (state) => {
    return {
        historyItem: state.businessLk.historyItem,
        card: state.user.cardData,
        operationData: state.user.operationData,
        operationModal: state.cryppoLk.operationModal,
        isModal: state.cryppoLk.isModal,
        composition: state.user.compositionData,
    }
}

const BusinessLkContainer = connect(mapStateToProps, { switchModal, setModal })(BusinessLk);

export default BusinessLkContainer;