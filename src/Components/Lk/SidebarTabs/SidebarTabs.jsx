import React from "react";
import style from "./SidebarTabs.module.scss";
import SidebarTabsItem from "./SidebarTabsItem";

export default function SidebarTabs(props) {
  return (
    <div className={style.block}>
      <div className={style.wrapper}>
        <img src={props.tabs.icon} className={style.icon} />
        <div className={style.textWrapper}>
          <div className={style.title}>{props.tabs.title}</div>
          <div className={style.subtitle}>{props.tabs.cash}</div>
          <div className={style.subtitle}>{props.tabs.statistic}</div>
          <div className={style.text}>{props.tabs.text}</div>
        </div>
      </div>
    </div>
  );
}
