import React from "react";
import ExchangeCash from "../../UI/ExchangeCash/ExchangeCash";
import ExchangeOutput from "../../UI/ExchangeCash/ExchangeOutput";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import Check from "../../Lk/CheckLk/Check";
import DoughnutChart from "../../Lk/DoughnutChart/DoughnutChart";

export default function Balance(props) {
  return (
    <div className="main container">
      <div className="flex ">
        <div className="sidebar">
          <div className="sidebar__inner">
            <SubtitleLk arrow={false} subtitle="Балансы" />
            <Check
              isBankCard={false}
              cardList={props.cardList}
              currencyList={props.currencyList}
            />
          </div>
        </div>
        <div className="content">
          <SubtitleLk subtitle="Дашборд" />
          <div className="block">
            <DoughnutChart
              disableItem={props.disableItem}
              updateChart={props.updateChart}
              filter={true}
              isHover={props.isHover}
              setChartText={props.setChartText}
              operations={props.expenses}
              chartTextData={props.chartTextData}
              initChartText={props.initChartText}
            />
          </div>
          <SubtitleLk arrow={false} subtitle="Обмен" />
          <ExchangeCash currencyList={props.currencyList} />
          <SubtitleLk arrow={false} subtitle="Вывод" />
          <ExchangeOutput currencyList={props.currencyList} />
        </div>
      </div>
    </div>
  );
}
