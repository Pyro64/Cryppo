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
                updateChart={props.updateChart}
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
                big={true}
            />
            <div className={style.wrapper}>
                <Operation
                    operationList={props.operationList}
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
