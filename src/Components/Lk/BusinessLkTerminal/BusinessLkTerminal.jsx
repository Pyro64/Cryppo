import React from "react";
import BusinessLkTerminalItem from "./BusinessLkTerminalItem";
import style from "./BusinessLkTerminal.module.scss";
import BusinessLkTerminalAdd from "./BusinessLkTerminalModal/BusinessLkTerminalAdd";

export default function BusinessLkTerminal(props) {
  let terminalItem = props.terminals.map((e) => (
    <BusinessLkTerminalItem
      id={e.id}
      key={e.id}
      name={e.name}
      login={e.login}
      terminalId={e.terminalId}
      connected={e.connected}
      createDate={e.createDate}
    />
  ));
  return (
    <div className="main container">
      <div className={style.flex}>
        <BusinessLkTerminalAdd />
      </div>
      <div className="block">{terminalItem}</div>
    </div>
  );
}
