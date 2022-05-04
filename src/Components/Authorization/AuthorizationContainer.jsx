import { connect } from "react-redux";
import Authorization from "./Authorization";
import {authorizationPostThunkCreator } from '../../Redux/user-reducer';


let mapStateToProps = (state) => {
        return null
}

const AuthorizationContainer = connect(mapStateToProps, {authorizationPostThunkCreator})(Authorization);

export default AuthorizationContainer;