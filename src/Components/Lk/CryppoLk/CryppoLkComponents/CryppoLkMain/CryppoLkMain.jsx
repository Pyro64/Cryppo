import React from 'react'
import style from "../../CryppoLk.module.scss";
import Check from "../CheckLk/Check";
import Invest from "../InvestLk/Invest";
import AddCard from "../AddCard/AddCard";
import Operation from "../OperationLk/Operation";
import Statistic from "../StatisticLk/Statistic";
import News from '../../../News/News';
export default function CryppoLkMain(props) {
    return (
        <div className="main">
            <div className="flex container">
                <div className="sidebar">
                    <div className="sidebar__inner">
                        <Check card={props.card} bankCard={props.bankCard} />
                        <Invest invest={props.invest} />
                        <AddCard newCard={props.newCard} />
                    </div>
                </div>
                <div className="content">
                    <News news={props.news} />
                    <Operation operationData={props.operationData} />
                    <Statistic statistic={props.statistic} />
                </div>
            </div>
        </div>
    )
}
