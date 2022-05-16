import { connect } from 'react-redux'
import CryppoInvest from './CryppoInvest'
import { getCryppoIndexThunkCreator } from '../../Redux/cryppoInvest-reducer';
import {login, addStep} from '../../Redux/cryppoInvest-reducer'
let mapStateToProps = (state) => {
    return {
        benefits: state.cryppoInvestPage.benefitsData,
        suggestions: state.cryppoInvestPage.suggestionsData,
        banner: state.cryppoInvestPage.bannerData,
        aboutDataIndex: state.cryppoInvestPage.aboutDataIndex,
        logo: state.cryppoInvestPage.route.logo,
        btn: state.cryppoInvestPage.route.btn,
        isLogin: state.cryppoInvestPage.isLogin,
        bannerIndex: state.cryppoInvestPage.bannerIndex,
        step: state.cryppoInvestPage.step,
        user: state.user.userData,
        nav: state.cryppoInvestPage.navData,
    }
}

const CryppoInvestContainer = connect(mapStateToProps, { addStep, login, getCryppoIndexThunkCreator })(CryppoInvest);
export default CryppoInvestContainer