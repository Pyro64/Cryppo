import React from "react";
import style from "./CompositionIndex.module.scss";
import CompositionIndexItem from "./CompositionIndexItem";

export default function CompositionIndex(props) {
  let items = props.map((e) => <CompositionIndexItem id={e.id} key={e.key} />);
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
