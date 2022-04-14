import React from "react";
import style from "./Check.module.scss";

export default function CheckCard(props) {
  return (
    <div className={style.card}>
      <div className={style.line}></div>
      <div className={style.number}>{props.number}</div>
      <img src={props.logo} className={style.logo}></img>
    </div>
  );
}
