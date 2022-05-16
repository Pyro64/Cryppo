import { connect } from "react-redux";

import  BusinessLk from './BusinessLk'
let mapStateToProps = (state) => {
    return {
    coin: state.businessLk.coin
    }
}

const BusinessLkContainer =  connect(mapStateToProps)(BusinessLk);

export default BusinessLkContainer;