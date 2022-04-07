import { connect } from 'react-redux'
import CryppoIndex from './CryppoIndex'
import { addStep } from '../../Redux/anim-reduсer';
import { login } from '../../Redux/cryppoIndex-reducer';
let mapStateToProps = (state) => {
    return {
        benefits: state.cryppoIndexPage.benefitsData,
        suggestions: state.cryppoIndexPage.suggestionsData,
        banner: state.cryppoIndexPage.bannerData,
        aboutData: state.cryppoIndexPage.aboutData,
        logo: state.cryppoIndexPage.route.logo,
        btn: state.cryppoIndexPage.route.btn,
        isLogin: state.cryppoIndexPage.isLogin,
        bannerIndex: state.anim.bannerIndex,
        step: state.anim.step,
    }
}

const CryppoIndexContainer = connect(mapStateToProps, { addStep, login })(CryppoIndex);
export default CryppoIndexContainer