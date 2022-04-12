import { connect } from 'react-redux'
import { login } from '../../Redux/cryppo-reducer';
import Cryppo from './Cryppo';
let mapStateToProps = (state) => {
    return {
        logo: state.cryppoPage.route.logo,
        btn: state.cryppoPage.route.btn,
        isLogin: state.cryppoPage.isLogin,
        user: state.cryppoPage.userData,
        card: state.cryppoLk.cardData
    }
}

const CryppoContainer = connect(mapStateToProps, { login })(Cryppo);
export default CryppoContainer