import React from "react";
import style from "./Check.module.scss";
import CheckItem from "./CheckItem";
import CheckCard from "./CheckCard";

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
  let bankCard = props.bankCard.map((e) => (
    <CheckCard id={e.id} key={e.id} number={e.number} logo={e.logo} />
  ));
  return (
    <div className={style.block}>
      <div className={style.item}>{elementCard}</div>
      <div className={style.card}>
        <div className={style.drop} />
        <div className={style.text}>Банковские карты</div>
        <div className={style.card}>{bankCard}</div>
      </div>
    </div>
  );
}
