import React from "react";
import style from "./Check.module.scss";
import CheckItem from "./CheckItem";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import CheckCardBlock from "./CheckCardBlock";

export default function Check(props) {
  let elementCard = props.card.map((e) => (
    <CheckItem
      id={e.id}
      key={e.id}
      icon={e.icon}
      text={e.text}
      availability={e.availability}
      prise={e.prise}
    />
  ));

  return (
    <div className={style.containers}>
      <SubtitleLk arrow={false} subtitle="Счета" />
      <div className={style.block}>
        <div className={style.item}>
          {elementCard}
        </div>
        {props.isBankCard !== false
          ? <CheckCardBlock bankCard={props.bankCard} />
          : null
        }
      </div>
    </div>
  );
}
