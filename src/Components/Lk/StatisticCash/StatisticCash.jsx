import React from "react";
import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
import style from "./StatisticCash.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DoughnutChart from "../DoughnutChart/DoughnutChart";


const StatisticCash = (props) => {
    return (
        <div className={style.block}>
            <Tabs>
                <TabList className={style.list}>
                    <Tab className={style.tab} selectedClassName={style.activeTab}>
                        <div>Расходы</div>
                    </Tab>
                    <Tab className={style.tab} selectedClassName={style.activeTab}>
                        <div>Поступления</div>
                    </Tab>
                </TabList>
                <TabPanel>
                    <DoughnutChart disableItem = {props.disableItem} updateChart={props.updateChart} addTag={props.addTag} filter={true}
                        isHover={props.isHover} setChartText={props.setChartText} operations={props.expenses} chartTextData={props.chartTextData} initChartText={props.initChartText} />
                </TabPanel>
                <TabPanel>
                    <DoughnutChart disableItem = {props.disableItem} updateChart={props.updateChart} addTag={props.addTag} filter={true}
                        isHover={props.isHover} setChartText={props.setChartText} operations={props.arrival}
                        chartTextData={props.chartTextData} initChartText={props.initChartText} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default StatisticCash;
