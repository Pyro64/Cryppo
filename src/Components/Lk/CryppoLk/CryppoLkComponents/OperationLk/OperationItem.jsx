import React from "react";
import style from "./Operation.module.scss";
import { toggleHandler } from './OperationInner'
export default function OperationItem(props) {
  let value = props
  return (
    <div className={style.line} onClick={() => props.setModal(value)}>
      <div className={style.flex}>
        <img src={props.icon} className={style.icon} alt="icon" />
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
