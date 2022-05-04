import React from "react";
import style from "./CompositionIndex.module.scss";

export default function CompositionIndexItem(props) {
  return (
    <div className={style.index}>
      <div className={style.left}>
        <img src={props.icon} className={style.icon} alt="img" />
        <div className={style.titleIndex}>
          <p className={style.name}>{props.name}</p>
          <p className={style.cash}>{props.value} $</p>
        </div>
      </div>

      <div className={style.bar}>
        <div
          className={style.activeBar}
          style={{ width: `${props.percent}%`, backgroundColor: props.color }}
        ></div>
      </div>
      <div className={style.percent} style={{ backgroundColor: props.color }}>
        {props.percent}%
      </div>
    </div>
  );
}
