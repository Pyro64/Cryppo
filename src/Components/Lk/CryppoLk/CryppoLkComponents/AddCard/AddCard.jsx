import React from "react";
import style from "./AddCart.module.scss";
import plus from "../../../../../Images/icon/plus.svg";

export default function AddCard(props) {
  return (
    <div>
      <img src={plus} className={style.icon} />
      <div className={style.text}>
        <div className={style.title}>{props.newCard.title}</div>
        <div className={style.text}>{props.newCard.povered}</div>
      </div>
      <img src={props.newCard.poveredIcon} className={style.logo} />
    </div>
  );
}
