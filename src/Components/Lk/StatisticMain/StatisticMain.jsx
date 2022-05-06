import React from "react";
import SubtitleLk from "../SubtitleLk/SubtitleLk";
import style from "./StatisticMain.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import StatisticMainItem from "./StatisticMainItem";
import ChartText from "./ChartText";

ChartJS.register(ArcElement, Tooltip, Legend);

const StatisticMain = (props) => {
  let dataItems = [];
  let backgroundColorItems = [];
  props.currency.map((e) => {
    dataItems.push(e.percent);
    backgroundColorItems.push(e.color);
  });
  let elementItem = props.currency.map((e) => (
    <StatisticMainItem
      setChartText={props.setChartText}
      initChartText={props.initChartText}
      percent={e.percent}
      id={e.id}
      key={e.id}
      color={e.color}
      category={e.category}
      cash={e.cash}
      currency={e.currency}
    />
  ));
  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    layout: {
      padding: {
        bottom(ctx) {
          const chart = ctx.chart;
          let pb = 0;
          chart.data.datasets.forEach(function (el) {
            const hOffset = el.hoverOffset || 0;
            pb = Math.max(hOffset / 2 + 5, pb);
          });
          return pb;
        },
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
    ],
  };

  return (
    <div сlassName={style.container}>
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
                  <ChartText
                      isHover={props.isHover}
                      chartTextData={props.chartTextData}
                  />
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
