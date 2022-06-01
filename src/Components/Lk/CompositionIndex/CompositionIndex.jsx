import React from "react";
import style from "./CompositionIndex.module.scss";
import CompositionIndexItem from "./CompositionIndexItem";
import MyBar from "../../UI/MyBar/MyBar";

export default function CompositionIndex(props) {
  let items = props.barData.compositions.map((e) => (
    <CompositionIndexItem
      changeActiveIndex={props.changeActiveIndex}
      id={e.id}
      key={e.id}
      icon={e.icon}
      name={e.name}
      value={e.value}
      color={e.color}
      percent={e.percent}
    />
  ));
  return (
    <div className="block">
      <div className={style.text}>
        Активы, их текущая рыночная стоимость и процентный показатель доли в
        индексе
      </div>
      <div className={style.wrapperIndex}>{items}</div>
      <MyBar compositions={props.barData.compositions} height={`300px`} changeActiveIndex={props.changeActiveIndex} />
    </div>
  );
}
