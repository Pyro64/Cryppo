import React from "react";
import SubtitleLk from "../SubtitleLk/SubtitleLk";
import style from "./StatisticCash.module.scss";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import DoughnutChart from "../CryppoLk/CryppoLkComponents/DoughnutChart/DoughnutChart";


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
                    <DoughnutChart updateChart={props.updateChart} addTag={props.addTag} filter={true}
                                   isHover={props.isHover} setChartText={props.setChartText} currency={props.currency}
                                   chartTextData={props.chartTextData} initChartText={props.initChartText}/>
                </TabPanel>
                <TabPanel>
                    <h2>tab 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default StatisticCash;
