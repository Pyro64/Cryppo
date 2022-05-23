import React from "react";
import style from "./Security.module.scss";

export default function ConnectItem(props) {
  return (
    <div className={style.line}>
      <div className={style.itemMax}>{props.date}</div>
      <div className={style.item}>{props.ip}</div>
      <div className={style.item}>{props.geo}</div>
      <div className={style.item}>{props.status}</div>
    </div>
  );
}
