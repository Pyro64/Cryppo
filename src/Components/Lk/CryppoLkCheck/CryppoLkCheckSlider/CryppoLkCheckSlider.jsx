import React from "react";
import style from "./CryppoLkCheckSlider.module.scss";
import plus from "../../../../Images/plus.svg";
export default function CryppoLkCheckSlider(props) {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.text}>Баланс кошелька ETH</div>
        <div className={style.value}> {props.availability} </div>
        <div className={style.plus}>
          <img src={plus} alt="icon" className={style.icon} />
        </div>
      </div>
      <div className={style.card}>
        <div className={style.text}>Баланс кошелька ETH</div>
        <div className={style.value}> {props.availability} </div>
        <div className={style.plus}>
          <img src={plus} alt="icon" className={style.icon} />
        </div>
      </div>
      <div className={style.card}>
        <div className={style.text}>Баланс кошелька ETH</div>
        <div className={style.value}> {props.availability} </div>
        <div className={style.plus}>
          <img src={plus} alt="icon" className={style.icon} />
        </div>
      </div>
    </div>
  );
}
