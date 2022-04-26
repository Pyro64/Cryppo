import React from 'react'
import style from "./StatisticMain.module.scss";
export default function ChartText(props) {
    const chartText = props.chartTextData
    return (
        <div className={style.statisticBlock}>
            <div className={style.statisticName}>{chartText.category}</div>
            <div className={style.statisticCash}>{chartText.cash}</div>
            <div className={style.statisticPercent}>{chartText.percent}</div>
        </div>
    )
}
