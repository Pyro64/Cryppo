import React, { useState } from "react";
import style from "./GeneralSetting.module.scss";

export default function WalletSettingItem(props) {
  const [toggle, setToggle] = useState(false);
  function toogleFunc() {
    setToggle(!toggle);
  }
  return (
    <div className={style.line}>
      <input type="checkbox" className={style.input} id={props.id} />
      <label onClick={toogleFunc} className={style.label} htmlFor={props.id}>
        <div className={style.labelItem}>
          <img className={style.labelImg} alt="icon" src={props.icon} />
          <div className={style.labelText}>{props.name}</div>
        </div>
        <div
          className={
            toggle
              ? `${style.labelCheck}`
              : `${style.labelCheck} ${style.check}`
          }
        ></div>
      </label>
    </div>
  );
}
