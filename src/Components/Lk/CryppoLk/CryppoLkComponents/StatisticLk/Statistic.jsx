import React from "react";
import style from "./Statistic.module.scss";
import StatisticItem from "./StatisticItem";

export default function Statistic(props) {
  let elementItem = props.statistic.map((e) => (
    <StatisticItem
      id={e.id}
      key={e.id}
      icon={e.icon}
      title={e.title}
      text={e.text}
      descripthion={e.descripthion}
    />
  ));
  return <div className={style.item}>{elementItem}</div>;
}
