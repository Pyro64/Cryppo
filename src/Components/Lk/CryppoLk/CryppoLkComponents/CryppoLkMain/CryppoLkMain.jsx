import React from "react";
import Check from "../CheckLk/Check";
import Operation from "../OperationLk/Operation";
import Statistic from "../StatisticLk/Statistic";

import News from '../../../News/News';
import StatisticMain from '../../../StatisticMain/StatisticMain';
import SidebarTabs from "../../../SidebarTabs/SidebarTabs";
export default function CryppoLkMain(props) {
  return (

    <div className="main">
      <div className="flex container">
        <div className="sidebar">
          <div className="sidebar__inner">
            <Check card={props.card} bankCard={props.bankCard} />
            <SidebarTabs tabs={props.tabs.invest} />
            <SidebarTabs tabs={props.tabs.addCart} />
          </div>
        </div>
        <div className="content">
          <News news={props.news} />
          <Operation operationData={props.operationData} setModal={props.setModal} operationModal={props.operationModal} isModal={props.isModal} switchModal={props.switchModal} />
          <StatisticMain isHover={props.isHover} setChartText={props.setChartText} currency={props.currency} chartTextData={props.chartTextData} initChartText={props.initChartText} />
          <Statistic statistic={props.statistic} />
        </div>
      </div>
    </div>
  )
}