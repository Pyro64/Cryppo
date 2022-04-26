import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import style from "./StatisticMain.module.scss";
export default function ChartText(props) {
    const chartText = props.chartTextData
    return (
        <CSSTransition
            in={props.isHover}
            classNames='my-node'
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
        >
            <div className={style.statisticBlock}>
                <div className={style.statisticName}>{chartText.category}</div>
                <div className={style.statisticCash}>{chartText.cash} USD</div>
                <div className={style.statisticPercent}>{chartText.percent} %</div>
            </div>
        </CSSTransition >

    )
}
