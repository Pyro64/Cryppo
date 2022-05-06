import React, { useRef, useEffect } from "react";
import style from "./Event.module.scss";
import SearchBar from "./SearchBar/SearchBar";
import StatisticCash from "../StatisticCash/StatisticCash";
import Operation from "../CryppoLk/CryppoLkComponents/OperationLk/Operation";
import { useParams } from "react-router-dom";

const Event = (props) => {
    let operations = props.operationData.operation;
    let currency = props.currency;
    const chartRef = useRef(null);
    const { category, subcategory } = useParams();
    useEffect(() => {
        if (props.filter === true) {
            currency = props.filterOperationsThunkCreator(
                props,
                category,
                subcategory
            );
        }
    }, []);

    return (
        <div className="main container">
            <SearchBar
                operationsFilter={props.operationsFilter}
                addTag={props.addTag}
                removeTag={props.removeTag}
                inputChange={props.inputChange}
            />
            <StatisticCash
                filter={false}
                isHover={props.isHover}
                setChartText={props.setChartText}
                currency={props.currency}
                chartTextData={props.chartTextData}
                initChartText={props.initChartText}
                operationData={props.operationData}
                setModal={props.setModal}
                operationModal={props.operationModal}
                isModal={props.isModal}
                switchModal={props.switchModal}
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
