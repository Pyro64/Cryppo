import React from "react";
import CryppoLkCheckAction from "./CryppoLkCheckAction/CryppoLkCheckAction";
import CryppoLkCheckSelect from "./CryppoLkCheckSelect/CryppoLkCheckSelect";
import CryppoLkCheckSlider from "./CryppoLkCheckSlider/CryppoLkCheckSlider";
import StatisticCash from "../StatisticCash/StatisticCash";
import Operation from "../OperationLk/Operation";
export default function CryppoLkCheck(props) {
  return (
    <div className="container main">
      <CryppoLkCheckSelect {...props.cardList[0]} />
      <CryppoLkCheckSlider {...props.cardList[0]} />
      <CryppoLkCheckAction />
      <StatisticCash
        filter={false}
        isHover={props.isHover}
        expenses={props.expenses}
        arrival={props.arrival}
        doughuntTextData={props.doughuntTextData}
        operationData={props.operationData}
        setModal={props.setModal}
        operationModal={props.operationModal}
        isModal={props.isModal}
        switchModal={props.switchModal}
        updateChart={props.updateChart}
      />
      <Operation
        operationList={props.operationList}
        setModal={props.setModal}
        operationModal={props.operationModal}
        isModal={props.isModal}
        switchModal={props.switchModal}
      />
    </div>
  );
}
