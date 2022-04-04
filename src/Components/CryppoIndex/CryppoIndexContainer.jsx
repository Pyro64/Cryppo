import { connect } from 'react-redux'
import CryppoIndex from './CryppoIndex'
import { addStep } from '../../Redux/anim-reduсer';

let mapStateToProps = (state) => {
    return {
        benefits: state.cryppoIndexPage.BenefitsData,
        suggestions: state.cryppoIndexPage.SuggestionsData,
        banner: state.cryppoIndexPage.bannerData,
        bannerIndex: state.anim.bannerIndex,
        step: state.anim.step,
    }
}
const CryppoIndexContainer = connect(mapStateToProps, { addStep })(CryppoIndex);
export default CryppoIndexContainer