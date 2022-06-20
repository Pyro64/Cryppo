import React from "react";
import style from "./StatisticCash.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DoughnutChart from "../DoughnutChart/DoughnutChart";

const StatisticCash = (props) => {
    return (
        <div className={style.block}>
            <Tabs>
                <TabList className={style.list}>
                    <Tab
                        className={style.tab}
                        selectedClassName={style.activeTab}
                    >
                        <div>Расходы</div>
                    </Tab>
                    <Tab
                        className={style.tab}
                        selectedClassName={style.activeTab}
                    >
                        <div>Поступления</div>
                    </Tab>
                </TabList>
                <TabPanel>
                    <DoughnutChart
                        operationType="expenses"
                        updateChart={props.updateChart}
                        filter={true}
                        big={props.big}
                        isHover={props.isHover}
                        operations={props.expenses}
                        doughuntTextData={props.doughuntTextData}
                    />
                </TabPanel>
                <TabPanel>
                    <DoughnutChart
                        operationType="arrival"
                        updateChart={props.updateChart}
                        filter={true}
                        isHover={props.isHover}
                        operations={props.arrival}
                        doughuntTextData={props.doughuntTextData}
                        big={props.big}
                    />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default StatisticCash;
