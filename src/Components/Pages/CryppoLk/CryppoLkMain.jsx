import React from "react";
import Check from "../../Lk/CheckLk/Check";
import Operation from "../../Lk/OperationLk/Operation";
import Statistic from "../../Lk/StatisticLk/Statistic";

import News from '../../Lk/News/News';
import StatisticCash from '../../Lk/StatisticCash/StatisticCash';
import SidebarTabs from "../../Lk/SidebarTabs/SidebarTabs";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
export default function CryppoLkMain(props) {
  return (

    <div className="main">
      <div className="flex container">
        <div className="sidebar">
          <div className="sidebar__inner">
            <SubtitleLk arrow={false} subtitle="Счета и карты" />
            <Check cardList={props.cardList} bankCardList={props.bankCardList} />
            <SidebarTabs tabs={props.tabs} />
            <SidebarTabs tabs={props.tabs} />
          </div>
        </div>
        <div className="content">
          <News news={props.news} />
          <SubtitleLk arrow={true} subtitle="Последние операции" />
          <Operation operationData={props.operationData} setModal={props.setModal} operationModal={props.operationModal} isModal={props.isModal} switchModal={props.switchModal} />
          <SubtitleLk arrow={true} subtitle="Статистика за март" />
          <StatisticCash disableItem={props.disableItem} filter={false} isHover={props.isHover} setChartText={props.setChartText} expenses={props.expenses} arrival={props.arrival} chartTextData={props.chartTextData} initChartText={props.initChartText} operationData={props.operationData} setModal={props.setModal} operationModal={props.operationModal} isModal={props.isModal} switchModal={props.switchModal} updateChart={props.updateChart} />
          <Statistic statistic={props.statistic} />
        </div>
      </div>
    </div>
  )
}