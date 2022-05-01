import { connect } from 'react-redux'
import CryppoIndex from './CryppoIndex'
import { addStep } from '../../Redux/anim-reduсer';
import { getCryppoIndexThunkCreator } from '../../Redux/cryppoIndex-reducer';
import { login } from '../../Redux/user-reducer';
let mapStateToProps = (state) => {
    return {
        benefits: state.interface.benefitsData,
        suggestions: state.cryppoIndexPage.suggestionsData,
        banner: state.interface.bannerData,
        aboutDataIndex: state.cryppoIndexPage.aboutDataIndex,
        logo: state.link.route.logo,
        btn: state.link.route.btn,
        isLogin: state.user.isLogin,
        bannerIndex: state.anim.bannerIndex,
        step: state.anim.step,
        user: state.user.userData,
        nav: state.link.navData,
    }
}

const CryppoIndexContainer = connect(mapStateToProps, { addStep, login, getCryppoIndexThunkCreator })(CryppoIndex);
export default CryppoIndexContainer