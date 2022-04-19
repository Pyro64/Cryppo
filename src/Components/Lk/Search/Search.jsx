import React, { useState } from "react";
import style from "./Searc.module.scss";
import icon from "../../../Images/icon/search.svg";
import TypeTranslation from "../CryppoLk/CryppoLkComponents/TypeTranslation/TypeTranslation";
import TypeTranslationItem from "../CryppoLk/CryppoLkComponents/TypeTranslation/TypeTranslationItem";

const Search = (props) => {
  const [value, setValue] = useState("");
  const filterTranslation = props.translations.filter((e) => {
    return e.title.toLowerCase().includes(value.toLowerCase());
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
        {filterTranslation.map((e) => {
          return (
            <TypeTranslationItem
              id={e.id}
              key={e.id}
              icon={e.icon}
              title={e.title}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Search;
