import React from "react";
import style from "./CompositionIndex.module.scss";

export default function CompositionIndexItem(props) {
  return (
    <div className={style.index}>
      <img src={props.icon} className={style.icon} alt="img" />
      <div className={style.titleIndex}>
        <p>{props.name}</p>
        <p>{props.value}</p>
      </div>
      <div></div>
      <div className={style.percent} style={{ backgroundColor: props.color }}>
        {props.percent}
      </div>
    </div>
  );
}
