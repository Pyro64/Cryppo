import React from "react";
import style from "./Operation.module.scss";

export default function OperationItem(props) {
  return (
    <div className={style.item}>
      <img src={props.icon} className={style.icon} />
      <div className={style.wrapper}>
        <div className={style.type}>{props.type}</div>
        <div className={style.subtitle}>{props.title}</div>
        <div className={style.check}>{props.check}</div>
      </div>
      <div
        className={
          props.status ? `${style.acept} ${style.false}` : `${style.acept}`
        }
      />
      <div className={style.cash}>{props.cash} ETH</div>
    </div>
  );
}
