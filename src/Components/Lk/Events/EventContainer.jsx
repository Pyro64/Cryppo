import { connect } from "react-redux";
import Event from "./Event";
import { get, setModal, switchModal, setChartText, initChartText } from "../../../Redux/cryppoLk-reducer"


let mapStateToProps = (state) => {
  return {
    operationData: state.user.operationData,
    statistic: state.user.statisticData,
    translations: state.interface.translationsData,
    currency: state.user.currencyStatisticData,
    composition: state.user.compositionData,
    operationModal: state.cryppoLk.operationModal,
    isModal: state.cryppoLk.isModal,
    chartTextData: state.interface.chartTextData,
    isHover: state.interface.isHover,
  };
};

const EventContainer = connect(mapStateToProps, {
  get,
  setModal,
  switchModal,
  setChartText,
  initChartText
})(Event);
export default EventContainer;
