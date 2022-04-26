import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import style from "./StatisticMain.module.scss";
export default function ChartText(props) {
    const chartText = props.chartTextData
    const classNames = {
        appear: `${style.hover}`,
        appearActive: 'my-active-appear',
        appearDone: 'my-done-appear',
        enter: `${style.hoverEnter}`,
        enterActive: 'my-active-enter',
        enterDone: `${style.hoverEnterDone}`,
        exit: `${style.hoverExit}`,
        exitActive: 'my-active-exit',
        exitDone: `${style.hoverExitDone}`,
    }
    return (
        <CSSTransition
            in={props.isHover}
            // classNames='my-node'
            classNames={{ ...classNames }}
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
