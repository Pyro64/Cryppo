import React from "react";
import style from "./Check.module.scss";
import CheckItem from "./CheckItem";
import CheckCard from "./CheckCard";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";

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
    <div className={style.containers}>
      <SubtitleLk arrow={false} subtitle="Счета и карты" />
      <div className={style.block}>
        <div className={style.item}>{elementCard}</div>
        <div className={style.card}>
          <div className={style.last}>
            <div className={style.drop} />
            <div className={style.bankText}>Банковские карты</div>
          </div>
          <div className={style.cardLine}>{bankCard}</div>
        </div>
      </div>
    </div>
  );
}
