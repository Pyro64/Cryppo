import React from "react";
import style from "./BusinessLkTerminal.module.scss";
import BusinessLkTerminalLogin from "./BusinessLkTerminalModal/BusinessLkTerminalLogin";
import BusinessLkTerminalName from "./BusinessLkTerminalModal/BusinessLkTerminalName";
import BusinessLkTerminalPassword from "./BusinessLkTerminalModal/BusinessLkTerminalPassword";

export default function BusinessLkTerminalItem(props) {
  return (
    <div
      className={
        props.connected
          ? `${style.card} ${style.connected}`
          : `${style.card} ${style.notConnected}`
      }
    >
      <div className={style.flex}>
        <div>
          <div className={style.title}>{props.name}</div>
          <div className={style.text}>{props.login}</div>
        </div>
        <div>
          <div className={style.text}>{props.createDate}</div>
          <div className={style.text}>{props.terminalId}</div>
        </div>
      </div>
      <div className={style.flex}>
        <BusinessLkTerminalName />
        <BusinessLkTerminalLogin />
        <BusinessLkTerminalPassword />
        <div className={style.link}>Удалить терминал</div>
      </div>
    </div>
  );
}
