import React from "react";
import style from "./Operation.module.scss";

export default function OperationItem(props) {
  debugger;
  return (
    <div className={style.item}>
      <img src={props.icon} className={style.icon} />
    </div>
  );
}
