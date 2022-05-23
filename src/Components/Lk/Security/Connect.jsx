import React from "react";
import ConnectItem from "./ConnectItem";
import style from "./Security.module.scss";

export default function Connect(props) {
  let line = props.connectOption.map((e) => (
    <ConnectItem
      id={e.id}
      key={e.key}
      date={e.date}
      ip={e.ip}
      geo={e.geo}
      status={e.status}
      device={e.device}
    />
  ));
  return (
    <div className={style.table}>
      <div className={style.header}>
        <div className={style.headerItemMax}>Дата</div>
        <div className={style.headerItem}>IP</div>
        <div className={style.headerItem}>Геолокация</div>
        <div className={style.headerItem}>Статус</div>
      </div>
      <div className={style.body}>{line}</div>
    </div>
  );
}
