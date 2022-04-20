import React, { useState } from "react";
import style from "./Searc.module.scss";
import icon from "../../../Images/icon/search.svg";
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
          if (e.length !== 0 || e.length !== null || e.length !== undefined) {
            return (
              <TypeTranslationItem
                id={e.id}
                key={e.id}
                icon={e.icon}
                title={e.title}
              />
            );
          } else {
            return (
              <div className={style.null}>
                Ничего не найдено, проверьте свой запрос
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Search;
