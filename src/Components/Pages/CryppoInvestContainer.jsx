import { connect } from 'react-redux'
import CryppoInvest from './CryppoInvest'
import { addStep } from '../../Redux/anim-reduсer';
import { getCryppoIndexThunkCreator } from '../../Redux/cryppoInvest-reducer';
import {login} from '../../Redux/cryppoInvest-reducer'
let mapStateToProps = (state) => {
    return {
        benefits: state.interface.benefitsData,
        suggestions: state.cryppoIndexPage.suggestionsData,
        banner: state.interface.bannerData,
        aboutDataIndex: state.cryppoIndexPage.aboutDataIndex,
        logo: state.link.route.logo,
        btn: state.link.route.btn,
        isLogin: state.cryppoIndexPage.isLogin,
        bannerIndex: state.anim.bannerIndex,
        step: state.anim.step,
        user: state.user.userData,
        nav: state.link.navData,
    }
}

const CryppoInvestContainer = connect(mapStateToProps, { addStep, login, getCryppoIndexThunkCreator })(CryppoInvest);
export default CryppoInvestContainer