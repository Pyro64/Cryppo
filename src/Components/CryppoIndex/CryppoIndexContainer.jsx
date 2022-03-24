import {connect} from 'react-redux'
import CryppoIndex from './CryppoIndex'


let mapStateToProps = (state) => {
    return{
        benefits: state.cryppoIndexPage.BenefitsData,
    }
}
const CryppoIndexContainer = connect(mapStateToProps)(CryppoIndex);

export default CryppoIndexContainer