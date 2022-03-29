import { connect } from "react-redux";
import Header from "./Header";
import { bussiness, index, cryppo } from '../../Redux/router-reducer';

let mapStateToProps = (state) => {
    return {
        logo: state.router.routerData.logo,
        btn: state.router.routerData.btn,
    }
}
const HeaderContainer = connect(mapStateToProps, { bussiness, index, cryppo })(Header);

export default HeaderContainer;