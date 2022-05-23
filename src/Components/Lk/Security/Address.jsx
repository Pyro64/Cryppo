import React from "react";
import style from "./Security.module.scss";
import AddressItem from "./AddressItem";

export default function Address(props) {
  let address = props.connectOption.map((e) => (
    <AddressItem
      id={e.id}
      key={e.key}
      date={e.date}
      ip={e.ip}
      geo={e.geo}
      status={e.status}
      device={e.device}
      deleteAddress={props.deleteAddress}
    />
  ));
  return (
    <div className={style.table}>
      <div className={style.header}>
        <div className={style.headerItemMax}>Дата</div>
        <div className={style.headerItem}>IP</div>
        <div className={style.headerItem}>Геолокация</div>
      </div>
      <div className={style.body}>{address}</div>
    </div>
  );
}
