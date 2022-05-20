import React from "react";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import Operation from "../OperationLk/Operation";

export default function BusinessLkHistory(props) {
  return (
    <div className="main container">
      <div className="flex ">
        <div className="sidebar">
          <div className="sidebar__inner">
            <SubtitleLk arrow={false} subtitle="Фильтр" />
          </div>
        </div>
        <div className="content">
          <SubtitleLk arrow={false} subtitle="История" />
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
