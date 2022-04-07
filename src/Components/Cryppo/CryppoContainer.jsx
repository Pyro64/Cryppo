import { connect } from 'react-redux'
import { login } from '../../Redux/cryppo-reducer';
import Cryppo from './Cryppo';
let mapStateToProps = (state) => {
    return {
        logo: state.cryppoPage.route.logo,
        btn: state.cryppoPage.route.btn,
        isLogin: state.cryppoPage.isLogin,
        url: state.cryppoPage.url,
    }
}

const CryppoContainer = connect(mapStateToProps, { login })(Cryppo);
export default CryppoContainer