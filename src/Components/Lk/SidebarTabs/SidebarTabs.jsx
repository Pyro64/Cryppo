import React from "react";
import style from "./SidebarTabs.module.scss";

export default function SidebarTabs(props) {
  debugger;
  let title = <div className={style.title}>{props.tabs.title}</div>;
  let cash = <div className={style.subtitle}>{props.tabs.cash}</div>;
  let statistic = <div className={style.subtitle}>{props.tabs.statistic}</div>;
  let text = <div className={style.text}>{props.tabs.text}</div>;
  let povered = <img src={props.tabs.povered} className={style.poveredIcon} />;
  return (
    <div className={style.block}>
      <div className={style.wrapper}>
        <img src={props.tabs.icon} className={style.icon} />
        <div className={style.textWrapper}>
          <div>{props.tabs.title ? title : ""}</div>
          <div>{props.tabs.statistic ? statistic : ""}</div>
          <div>{props.tabs.cash ? cash : ""}</div>
          <div>{props.tabs.text ? text : ""}</div>
        </div>
        <div>{props.tabs.povered ? povered : ""}</div>
      </div>
    </div>
  );
}
