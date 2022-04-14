import React from "react";
import style from "./InvestLk.module.scss";
export default function Invest(props) {
  return (
    <div>
      <div className={style.icon}></div>
      <div className={style.text}>
        <div className={style.title}>{props.invest.title}</div>
        <div className={style.text}>{props.invest.crypto}</div>
        <div className={style.text}>{props.invest.cash}</div>
        <div className={style.text}>{props.invest.povered}</div>
      </div>
      <img src={props.invest.icon} className={style.icon}></img>
    </div>
  );
}
