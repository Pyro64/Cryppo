import React from "react";
import style from "./CompositionIndex.module.scss";
import CompositionIndexItem from "./CompositionIndexItem";

export default function CompositionIndex(props) {
  let items = props.composition.map((e) => (
    <CompositionIndexItem
      id={e.id}
      key={e.key}
      icon={e.icon}
      name={e.name}
      cash={e.cash}
      valute={e.valute}
      proccent={e.proccent}
      color={e.color}
    />
  ));
  return (
    <div className={style.block}>
      <div className={style.text}>
        Активы, их текущая рыночная стоимость и процентный показатель доли в
        индексе
      </div>
      <div className={style.wrapper}>
        <div className={style.item}>{items}</div>
      </div>
    </div>
  );
}
