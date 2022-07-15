import React from "react";
import style from "./CryppoLkCheckSelect.module.scss";
export default function CryppoLkCheckActive(props) {
  debugger;

  return (
    <div>
      <div className={style.item}>
        <img className={style.icon} src={props.icon} alt="icon" />
        <div className={style.text}>{props.text}</div>
      </div>
    </div>
  );
}
