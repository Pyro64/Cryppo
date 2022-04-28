import { connect } from "react-redux";
import Event from "./Event";
import { get, setModal, switchModal, setChartText, initChartText } from "../../../Redux/cryppoLk-reducer"


let mapStateToProps = (state) => {
  return {
    operationData: state.cryppoLk.operationData,
    statistic: state.cryppoLk.statisticData,
    translations: state.cryppoLk.translationsData,
    currency: state.cryppoLk.currencyStatisticData,
    composition: state.cryppoLk.compositionData,
    operationModal: state.cryppoLk.operationModal,
    isModal: state.cryppoLk.isModal,
    chartTextData: state.cryppoLk.chartTextData,
    isHover: state.cryppoLk.isHover,
  };
};

const EventContainer = connect(mapStateToProps, {
  get,
  setModal,
  switchModal,
  setChartText,
  initChartText,
})(Event);
export default EventContainer;
