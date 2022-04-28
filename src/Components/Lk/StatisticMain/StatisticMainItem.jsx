import React from "react";
import style from "./StatisticMain.module.scss";
import { NavLink } from "react-router-dom";
const StatisticMainItem = (props) => {
  let value = props;
  return (
    <NavLink to={`/lk/event/${props.category}`}
      className={style.item}
      onMouseEnter={() => props.setChartText(value)}
      onMouseLeave={() => props.initChartText()}
    >
      <div
        style={{ background: `${props.color}` }}
        className={style.circle}
      ></div>
      <div className={style.category}>{props.category}</div>
      <div className={style.cash}>{props.cash}</div>
      <div className={style.currency}>{props.currency}</div>
    </NavLink>
  );
};

export default StatisticMainItem;
