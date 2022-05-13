import React from "react";
import SidebarTabs from "../SidebarTabs/SidebarTabs";
import SubtitleLk from "../SubtitleLk/SubtitleLk";
import ChartIndex from "../../Landing/ChartIndex/ChartIndex";
import CompositionIndex from "../CompositionIndex/CompositionIndex";

export default function CryppoLkInvest(props) {
  return (
    <div className="main">
      <div className="flex container">
        <div className="sidebar">
          <div className="sidebar__inner">
            <SubtitleLk subtitle="Дашборт" />
            <SidebarTabs tabs={props.tabs.indexNow} />
            <SidebarTabs tabs={props.tabs.volumeIndex} />
            <SidebarTabs tabs={props.tabs.indexProfit} />
            <SidebarTabs tabs={props.tabs.buyNow} />
          </div>
        </div>
        <div className="content">
          <SubtitleLk subtitle="Состав индекса" />
          <CompositionIndex
            composition={props.composition}
            changeActiveIndex={props.changeActiveIndex}
          />
        </div>
      </div>
    </div>
  );
}
