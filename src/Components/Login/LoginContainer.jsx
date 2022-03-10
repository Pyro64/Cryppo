import Login from "./Login";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        login: state.login,
    }
}

const LoginContainer = connect(mapStateToProps)(Login);

export default LoginContainer;