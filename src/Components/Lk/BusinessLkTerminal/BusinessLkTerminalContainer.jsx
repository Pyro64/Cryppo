import { connect } from "react-redux";
import BusinessLkTerminal from "./BusinessLkTerminal";

let mapStateToProps = (state) => {
  return {
    terminals: state.user.business.terminals,
  };
};

const BusinessLkTerminalContainer = connect(
  mapStateToProps
)(BusinessLkTerminal);

export default BusinessLkTerminalContainer;
