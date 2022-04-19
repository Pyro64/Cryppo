import React from "react";
import style from "./TypeTranslation.module.scss";

export default function TypeTranslationItem(props) {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>{props.title}</div>
      <img src={props.icon} />
    </div>
  );
}
