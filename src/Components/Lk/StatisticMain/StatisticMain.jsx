import React from "react";
import SubtitleLk from "../SubtitleLk/SubtitleLk";
import style from "./StatisticMain.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import StatisticMainItem from "./StatisticMainItem";

ChartJS.register(ArcElement, Tooltip, Legend);


const StatisticMain = (props) => {
  let total = 0;
  let dataItems = [];
  debugger;
  let backgroundColorItems = [];
  props.currency.statisticItems.map(e => {
    dataItems.push(e.value);
    backgroundColorItems.push(e.color);
    total += e.cash;
  });
  let elementItem = props.currency.statisticItems.map((e) => (
    <StatisticMainItem
      id={e.id}
      key={e.id}
      color={e.color}
      category={e.category}
      cash={e.cash}
      currency={e.currency}
      onClick={() => {}}
    />
  ));
  const options = {
    plugins: {
      tooltip:{
        enabled: false
      },
    },
    cutout: 110,
  };
  const data = {
    labels: [],
    datasets: [
      {
        data: dataItems,
        backgroundColor: backgroundColorItems,
        borderWidth: 0,
        hoverOffset: 20,
      },
    ]
  };

  return (
    <div сlassName={style.container}>
      <SubtitleLk arrow={true} subtitle="Статистика за март" />
      <div className={style.block}>
        <Tabs>
          <TabList className={style.list}>
            <Tab className={style.tab} selectedClassName={style.activeTab}>
              <p>Расходы</p>
            </Tab>
            <Tab className={style.tab} selectedClassName={style.activeTab}>
              <p>Поступления</p>
            </Tab>
          </TabList>
          <TabPanel>
            <div className={style.flex}>
              <div className={style.items}>{elementItem}</div>
              <div className={style.chartInner}>
                <Doughnut data={data} options={options} />
                <div className={style.statisticBlock}>
                  <div className={style.statisticName}>Расходы</div>
                  <div className={style.statisticCash}>{total} $</div>
                  <div className={style.statisticPercent}>100 %</div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>tab 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default StatisticMain;
