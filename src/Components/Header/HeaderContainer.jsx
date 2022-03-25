import { connect } from "react-redux";
import Header from "./Header";
import { bussiness, index, cryppo } from '../../Redux/header-reducer';

let mapStateToProps = (state) => {
    return {
        logo: state.header.headerData.logo,
        btn: state.header.headerData.btn,
    }
}
const HeaderContainer = connect(mapStateToProps, { bussiness, index, cryppo })(Header);

export default HeaderContainer;