import React, { useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, getElementsAtEvent } from "react-chartjs-2";
import StatisticMainItem from "../StatisticMain/StatisticMainItem";
import ChartText from "../StatisticMain/ChartText";
import { useParams } from "react-router-dom";
import Operation from "../CryppoLk/CryppoLkComponents/OperationLk/Operation";
import style from "./Event.module.scss";
import SearchBar from "./SearchBar/SearchBar";

ChartJS.register(ArcElement, Tooltip, Legend);

const Event = (props) => {
    const chartRef = useRef(null);
    const { category, subcategory } = useParams();
    let value = props;
    let dataItems = [];
    let backgroundColorItems = [];
    let elementItem = [];
    let operations = props.operationData.operation;
    let currency = props.currency;
    if (props.filter === true) {
        currency = props.filterOperationsThunkCreator(props, category, subcategory);
        elementItem = currency.map((e) => (
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
                addTag={props.addTag}
            />
        ));
    } else {
        elementItem = currency.map((e) => (
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
        currency.map((e) => {
            dataItems.push(e.percent);
            backgroundColorItems.push(e.color);
        });
    }

    const onClick = (event) => {
        const { current: chart } = chartRef;
        if (!chart) {
            return;
        }
        let eTarget = getElementsAtEvent(chart, event);
        props.setChartText(value[eTarget[0].index]);
    };

    const options = {
        plugins: {
            options: {},
            tooltip: {
                enabled: false,
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
    // if (subcategory !== undefined) {
    //     return (
    //         <div className={style.container}>
    //             <div className={style.title}>{props.operationData.title}</div>
    //             <OperationInner
    //                 operationData={operations}
    //                 setModal={props.setModal}
    //                 isModal={props.isModal}
    //                 switchModal={props.switchModal}
    //             />
    //             <div>
    //                 <OperationModal
    //                     operationModal={props.operationModal}
    //                     isModal={props.isModal}
    //                     switchModal={props.switchModal}
    //                 />
    //             </div>
    //         </div>
    //     );
    // }
    return (
        <div className="main">
            <div сlassName={style.container}>
                <SearchBar
                    operationsFilter={props.operationsFilter}
                    addTag={props.addTag}
                    removeTag={props.removeTag}
                    inputChange={props.inputChange}
                />
                <div className={style.block}>
                    <Tabs>
                        <TabList className={style.list}>
                            <Tab
                                className={style.tab}
                                selectedClassName={style.activeTab}
                            >
                                <p>Расходы</p>
                            </Tab>
                            <Tab
                                className={style.tab}
                                selectedClassName={style.activeTab}
                            >
                                <p>Поступления</p>
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <div className={style.flex}>
                                <div className={style.items}>{elementItem}</div>
                                <div className={style.chartInner}>
                                    <Doughnut
                                        data={data}
                                        options={options}
                                        onClick={onClick}
                                        ref={chartRef}
                                        onMouseLeave={() =>
                                            props.initChartText()
                                        }
                                    />
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
                    <Operation
                        operationData={operations}
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

export default Event;
