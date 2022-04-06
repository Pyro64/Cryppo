import { connect } from 'react-redux'
import CryppoIndex from './CryppoIndex'
import { addStep } from '../../Redux/anim-reduсer';

let mapStateToProps = (state) => {
    return {
        benefits: state.cryppoIndexPage.benefitsData,
        suggestions: state.cryppoIndexPage.suggestionsData,
        banner: state.cryppoIndexPage.bannerData,
        bannerIndex: state.anim.bannerIndex,
        step: state.anim.step,
        aboutData: state.cryppoIndexPage.aboutData,
        
    }
}
const CryppoIndexContainer = connect(mapStateToProps, { addStep })(CryppoIndex);
export default CryppoIndexContainer