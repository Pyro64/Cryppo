import React from "react";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import Check from "../../Lk/CheckLk/Check";
import Operation from "../../Lk/OperationLk/Operation";
import DoughnutChart from "../../Lk/DoughnutChart/DoughnutChart";
import CompositionIndex from "../../Lk/CompositionIndex/CompositionIndex";
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
              operationList={props.operationList}
              chartTextData={props.chartTextData}
              initChartText={props.initChartText}
              disableItem={props.disableItem}
            />
          </div>
          <SubtitleLk arrow={true} subtitle="Статистика валют" />
          <CompositionIndex
              barData={props.barData}
            changeActiveIndex={props.changeActiveIndex}
          />
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
