import React, { useState } from "react";
import BusinessLkTerminalItem from "./BusinessLkTerminalItem";
import style from "./BusinessLkTerminal.module.scss";
import BusinessLkTerminalAdd from "./BusinessLkTerminalModal/BusinessLkTerminalAdd";
import icon from "../../../Images/icon/search.svg";
export default function BusinessLkTerminal(props) {
  const [value, setValue] = useState("");

  const filterTranslation = props.terminals.filter((e) => {
    return e.name.toLowerCase().includes(value.toLowerCase());
  });
  let terminalItem = filterTranslation.map((e) => (
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
        <div className={style.containerSearch}>
          <img src={icon} className={style.icon} alt="icon"></img>
          <input
            className={style.inputSearch}
            placeholder={"Введите имя терминала"}
            onChange={(event) => setValue(event.target.value)}
          ></input>
        </div>
        <BusinessLkTerminalAdd />
      </div>
      {terminalItem.length === 0 ? (
        <div className="block">
          <div className={style.null}>Запрос не найден </div>
        </div>
      ) : (
        <div className="block">{terminalItem}</div>
      )}
    </div>
  );
}