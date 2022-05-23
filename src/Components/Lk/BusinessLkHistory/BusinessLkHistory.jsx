import React from "react";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import FilterHistory from "../FilterHistory/FilterHistory";
import Operation from "../OperationLk/Operation";
var Scroll = require("react-scroll");
var Element = Scroll.Element;
export default function BusinessLkHistory(props) {
  return (
    <div className="main container">
      <div className="flex ">
        <div className="sidebar">
          <div className="sidebar__inner">
            <SubtitleLk arrow={false} subtitle="Фильтр" />
            <FilterHistory cashOption={props.cashOption} filterDate={props.filterDate} filterWallet={props.filterWallet} filterValute={props.filterValute}/>
          </div>
        </div>
        <div className="content">
          <SubtitleLk arrow={false} subtitle="История" />
          <Element name="myScrollToElement" />
          <Operation
            pagination={true}
            operationData={props.operationData}
            setModal={props.setModal}
            operationModal={props.operationModal}
            isModal={props.isModal}
            switchModal={props.switchModal}
          />
        </div>
      </div>
    </div>
  );
}
