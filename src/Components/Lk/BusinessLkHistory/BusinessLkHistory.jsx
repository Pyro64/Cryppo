import React from "react";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import FilterHistory from "../FilterHistory/FilterHistory";
import Operation from "../OperationLk/Operation";
import style from "./BusinessLKHistory.module.scss";
var Scroll = require("react-scroll");
var Element = Scroll.Element;
export default function BusinessLkHistory(props) {
    return (
        <div className="main container">
            <div className="flex ">
                <div className="sidebar">
                    <div className="sidebar__inner">
                        <SubtitleLk arrow={false} subtitle="Фильтр" />
                        <FilterHistory
                            currencyList={props.currencyList}
                            filterDate={props.filterDate}
                            filterWallet={props.filterWallet}
                            filterValute={props.filterValute}
                        />
                    </div>
                </div>
                <div className="content">
                    <SubtitleLk arrow={false} subtitle="История" />
                    <Element name="myScrollToElement" />
                    {props.operationList.length !== 0 ? (
                        <Operation
                            PaymentsPostTC={props.PaymentsPostTC}
                            fullOperation={true}
                            pagination={true}
                            operationList={props.operationList}
                            paymentList={props.paymentList}
                            setModal={props.setModal}
                            operationModal={props.operationModal}
                            isModal={props.isModal}
                            switchModal={props.switchModal}
                        />
                    ) : (
                        <div className={style.container}>Нет результатов</div>
                    )}
                </div>
            </div>
        </div>
    );
}
