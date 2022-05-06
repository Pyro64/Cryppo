import React, {useRef} from "react";
import  style from  './Event.module.scss'
import SearchBar from "./SearchBar/SearchBar";
import StatisticCash from "../StatisticCash/StatisticCash";
import Operation from "../CryppoLk/CryppoLkComponents/OperationLk/Operation";


const Event = (props) => {

    return (
        <div className="main container">
            <SearchBar
                operationsFilter={props.operationsFilter}
                addTag={props.addTag}
                removeTag={props.removeTag}
                inputChange={props.inputChange}
            />
            <StatisticCash filter={false} isHover={props.isHover} setChartText={props.setChartText} currency={props.currency} chartTextData={props.chartTextData} initChartText={props.initChartText} operationData={props.operationData} setModal={props.setModal} operationModal={props.operationModal} isModal={props.isModal} switchModal={props.switchModal}/>
            <div className={style.wrapper}>
                <Operation operationData={props.operationData} setModal={props.setModal} operationModal={props.operationModal} isModal={props.isModal} switchModal={props.switchModal}/>
            </div>

        </div>
    );
};

export default Event;
