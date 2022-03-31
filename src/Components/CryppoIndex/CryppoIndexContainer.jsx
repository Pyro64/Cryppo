import { connect } from 'react-redux'
import CryppoIndex from './CryppoIndex'


let mapStateToProps = (state) => {
    return {
        benefits: state.cryppoIndexPage.BenefitsData,
        suggestions: state.cryppoIndexPage.SuggestionsData,
        banner: state.cryppoIndexPage.bannerData,
    }
}
const CryppoIndexContainer = connect(mapStateToProps)(CryppoIndex);

export default CryppoIndexContainer