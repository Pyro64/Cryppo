import { connect } from "react-redux";

import BusinessLk from './BusinessLk'
let mapStateToProps = (state) => {
    return {
        historyItem: state.businessLk.historyItem
    }
}

const BusinessLkContainer = connect(mapStateToProps)(BusinessLk);

export default BusinessLkContainer;