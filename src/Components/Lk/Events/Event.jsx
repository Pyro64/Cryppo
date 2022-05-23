import React from "react";
import style from "./Event.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import StatisticCash from "../StatisticCash/StatisticCash";
import Operation from "../OperationLk/Operation";

const Event = (props) => {
  if (props.filter === true) {
    props.operationData.operation = props.operationData.operation.filter(
      (item) => {
        return props.expenses[0].parentCategory === item.type;
      }
    );
  }
  return (
    <div className="main container">
      <SearchBar
        operationsFilter={props.operationsFilter}
        addTag={props.addTag}
        removeTag={props.removeTag}
        inputChange={props.inputChange}
        filterDate={props.filterDate}
        expenses={props.expenses}
        arrival={props.arrival}
      />
      <StatisticCash
        updateChart={props.updateChart}
        filter={false}
        isHover={props.isHover}
        setChartText={props.setChartText}
        expenses={props.expenses}
        arrival={props.arrival}
        chartTextData={props.chartTextData}
        initChartText={props.initChartText}
        addTag={props.addTag}
      />
      <div className={style.wrapper}>
        <Operation
          operationData={props.operationData}
          setModal={props.setModal}
          operationModal={props.operationModal}
          isModal={props.isModal}
          switchModal={props.switchModal}
        />
      </div>
    </div>
  );
};

export default Event;
