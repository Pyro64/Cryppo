import React from "react";
import style from "./Event.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import StatisticCash from "../StatisticCash/StatisticCash";
import Operation from "../OperationLk/Operation";

const Event = (props) => {
    return (
        <div className="main container">
            <SearchBar
                updateChart={props.updateChart}
                expenses={props.expenses}
                arrival={props.arrival}
                defaultSearch={props.defaultSearch}
            />
            <StatisticCash
                updateChart={props.updateChart}
                filter={false}
                isHover={props.isHover}
                expenses={props.expenses}
                arrival={props.arrival}
                doughuntTextData={props.doughuntTextData}
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
