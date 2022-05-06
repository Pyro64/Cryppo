import React from "react";
import SubtitleLk from "../SubtitleLk/SubtitleLk";
import style from "./StatisticCash.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DoughnutChart from "../CryppoLk/CryppoLkComponents/DoughnutChart/DoughnutChart";


ChartJS.register(ArcElement, Tooltip, Legend);

const StatisticCash = (props) => {
  return (
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
              <DoughnutChart filter={true} isHover={props.isHover} setChartText={props.setChartText} currency={props.currency} chartTextData={props.chartTextData} initChartText={props.initChartText} />
            </TabPanel>
            <TabPanel>
              <h2>tab 2</h2>
            </TabPanel>
          </Tabs>
      </div>
  );
};

export default StatisticCash;
