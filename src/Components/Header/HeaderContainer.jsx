import { connect } from "react-redux";
import Header from "./Header";
import { bussiness, location } from '../../Redux/header-reducer';

let mapStateToProps = (state) => {
    return {
        logo: state.header.headerData.logo,
        btn: state.header.headerData.btn,
        location: state.header.location
    }
}
const HeaderContainer = connect(mapStateToProps, { bussiness, location })(Header);

export default HeaderContainer;