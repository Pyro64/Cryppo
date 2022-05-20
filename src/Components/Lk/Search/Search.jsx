import React, { useState } from "react";
import style from "./Searc.module.scss";
import icon from "../../../Images/icon/search.svg";
import TypeTranslationItem from "../TypeTranslation/TypeTranslationItem";
const Search = (props) => {
  const [value, setValue] = useState("");
  const filterTranslation = props.translations.filter((e) => {
    return e.title.toLowerCase().includes(value.toLowerCase());
  });
  const item = filterTranslation.map((e) => {
    <TypeTranslationItem id={e.id} key={e.id} icon={e.icon} title={e.title} />;
  });

  return (
    <div>
      <div className={style.containerSearch}>
        <img src={icon} className={style.icon}></img>
        <input
          className={style.input}
          placeholder={"Имя, телефон или наименование"}
          onChange={(event) => setValue(event.target.value)}
        ></input>
      </div>
      <div className={style.container}>
        {item.length === 0 ? <div>пусто</div> : <TypeTranslationItem />}
      </div>
    </div>
  );
};
export default Search;
