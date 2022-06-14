import React from "react";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import Check from "../CheckLk/Check";
import Operation from "../OperationLk/Operation";
import MyBar from "../../UI/MyBar/MyBar";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import CompositionIndex from "../CompositionIndex/CompositionIndex";
import SidebarTabs from "../SidebarTabs/SidebarTabs";
const BusinessLkMain = (props) => {
  return (
    <div className="main container">
      <div className="flex ">
        <div className="sidebar">
          <div className="sidebar__inner">
            <SubtitleLk arrow={false} subtitle="Счета" />
            <Check
              isBankCard={false}
              cardList={props.cardList}
              currencyList={props.currencyList}
            />
            <SidebarTabs tabs={props.tabs.addTerminal} />
          </div>
        </div>
        <div className="content">
          <SubtitleLk subtitle="Главная" />
          <div className="block">
            <DoughnutChart
              updateChart={props.updateChart}
              filter={true}
              isHover={props.isHover}
              setChartText={props.setChartText}
              operations={props.operationList}
              chartTextData={props.chartTextData}
              initChartText={props.initChartText}
              disableItem={props.disableItem}
            />
          </div>
          <SubtitleLk arrow={true} subtitle="Статистика валют" />
          <div className="block">
            <MyBar
              compositions={props.barData.compositions}
              height={`300px`}
              changeActiveIndex={props.changeActiveIndex}
            />
          </div>

          <SubtitleLk arrow={true} subtitle="Последние операции" />
          <Operation
            operationList={props.operationList}
            setModal={props.setModal}
            operationModal={props.operationModal}
            isModal={props.isModal}
            switchModal={props.switchModal}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessLkMain;
