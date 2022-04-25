import React from 'react';
import style from "./StatisticMain.module.scss";
const Statisticmainitem = (props) => {
    return (
        <div className={style.item}>
            <div style={{ background: `${props.color}` }} className={style.circle}></div>
            <div className={style.category}>{props.category}</div>
            <div className={style.cash}>{props.cash}</div>
            <div className={style.currency}>{props.currency}</div>
        </div>
    );
}

export default Statisticmainitem;

