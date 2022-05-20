import React from "react";
import style from "./Operation.module.scss";
export default function OperationItem(props) {
  let value = props;
  let isModal = !props.isModal;
  const a = () => {
    props.setModal(value);
    props.switchModal(isModal);
  };
  return (
    <div className={style.line} onClick={() => a()}>
      <div className={style.flex}>
        <img src={props.icon} className={style.icon} alt="icon" />
        <div className={style.wrapper}>
          <div>
            <div className={style.type}>{props.type}</div>
            <div className={style.subtitle}>{props.title}</div>
            <div className={style.check}>{props.check}</div>
          </div>
          <div
            className={style.status}
            style={{ background: `${props.status.color}` }}
          ></div>
        </div>
        <div
          className={
            props.status ? `${style.acept} ${style.false}` : `${style.acept}`
          }
        />
      </div>

      <div className={style.cash}>
        {props.cash} {props.id} ETH
      </div>
    </div>
  );
}
