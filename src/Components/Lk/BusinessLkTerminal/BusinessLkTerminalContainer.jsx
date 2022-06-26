import { connect } from "react-redux";
import BusinessLkTerminal from "./BusinessLkTerminal";
import {
    TerminalsDeletePostTC,
    TerminalsAddPostTC,
    TerminalsChangeNamePostTC,
    TerminalsChangeLoginPostTC,
    TerminalsChangePasswordPostTC,
} from "../../../Redux/user-reducer";

let mapStateToProps = (state) => {
    return {
        terminals: state.user.business.terminals,
    };
};

const BusinessLkTerminalContainer = connect(mapStateToProps, {
    TerminalsAddPostTC,
    TerminalsChangeNamePostTC,
    TerminalsChangeLoginPostTC,
    TerminalsChangePasswordPostTC,
    TerminalsDeletePostTC,
})(BusinessLkTerminal);

export default BusinessLkTerminalContainer;
