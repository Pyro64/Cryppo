import React from "react";
import style from "./Operation.module.scss";

export default function OperationItem(props) {
  return (
    <div className={style.line}>
      <div className={style.flex}>
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
      </div>

      <div className={style.cash}>{props.cash} ETH</div>
    </div>
  );
}
