import React from "react";
import style from "./Security.module.scss";

export default function AddressItem(props) {
  const deleteIteme = (e) => {
    props.deleteAddress(props.id);
  };

  return (
    <div className={style.line}>
      <div className={style.itemMax}>{props.date}</div>
      <div className={style.item}>{props.ip}</div>
      <div className={style.item}>{props.device}</div>
      <div className={style.close} onClick={deleteIteme}></div>
    </div>
  );
}
