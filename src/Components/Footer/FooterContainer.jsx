import { connect } from "react-redux";
import Footer from "./Footer";
import { bussiness, index, cryppo } from '../../Redux/router-reducer';
let mapStateToProps = (state) => {
    return {
        logo: state.router.routerData.logo,
        mail: state.footer.mail,
        icon: state.footer.social,
    }
}
const FooterContainer = connect(mapStateToProps,{ bussiness, index, cryppo })(Footer);

export default FooterContainer;
