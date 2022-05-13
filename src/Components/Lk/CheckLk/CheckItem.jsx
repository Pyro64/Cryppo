import React from "react";
import style from "./Check.module.scss";
export default function CheckItem(props) {
  return (
    <div className={style.line}>
      <div className={style.wrapper}>
        <div className={style.valute}>
          <img src={props.icon} className={style.icon} />
          <div className={style.text}>{props.text}</div>
        </div>

        <div className={style.column}>
          <div className={style.availability}>{props.availability}</div>
          <div className={style.prise}>{props.prise}</div>
        </div>
      </div>
    </div>
  );
}
