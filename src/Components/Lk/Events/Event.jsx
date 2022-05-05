import React, { useRef } from "react";
import style from "./Event.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, getElementsAtEvent } from "react-chartjs-2";
import StatisticMainItem from "../StatisticMain/StatisticMainItem";
import ChartText from "../StatisticMain/ChartText";
import { useParams } from "react-router-dom";
import OperationInner from "../CryppoLk/CryppoLkComponents/OperationLk/OperationInner";
import OperationModal from "../Modal/OperationModal";
import s from "../../Lk/CryppoLk/CryppoLkComponents/OperationLk/Operation.module.scss";
import SearchBar from "./SearchBar/SearchBar";

ChartJS.register(ArcElement, Tooltip, Legend);

const Event = (props) => {
    let value = props;
    let dataItems = [];
    let backgroundColorItems = [];
    let elementItem = [];
    const { category, subcategory } = useParams();
    let operations = props.operationData.operation;
    let currency = props.currency;
    const chartRef = useRef(null);

    const onClick = (event) => {
        const { current: chart } = chartRef;
        if (!chart) {
            return;
        }
        let eTarget = getElementsAtEvent(chart, event);
        props.setChartText(value[eTarget[0].index]);
    };

    if (category !== undefined) {
        value = value.currency.filter((item) => {
            return item.category === category;
        });

        value = value[0].childCurrencyStatistics.filter((item) => {
            return item.parentCategory === category;
        });

        currency = props.currency.filter((item) => {
            return item.category === category;
        });

        currency = currency[0];
        if (subcategory !== undefined) {
            operations = operations.filter((item) => {
                return item.firm === subcategory;
            });
        } else {
            operations = operations.filter((item) => {
                return item.type === category;
            });
        }

        currency.childCurrencyStatistics.map((e) => {
            dataItems.push(e.percent);
            backgroundColorItems.push(e.color);
        });

        elementItem = currency.childCurrencyStatistics.map((e) => (
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
    if (subcategory !== undefined) {
        return (
            <div className={s.container}>
                <div className={s.title}>{props.operationData.title}</div>
                <OperationInner
                    operationData={operations}
                    setModal={props.setModal}
                    isModal={props.isModal}
                    switchModal={props.switchModal}
                />
                <div>
                    <OperationModal
                        operationModal={props.operationModal}
                        isModal={props.isModal}
                        switchModal={props.switchModal}
                    />
                </div>
            </div>
        );
    }
    return (
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
                                    onMouseLeave={() => props.initChartText()}
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
            </div>
            <div className={s.container}>
                <div className={s.title}>{props.operationData.title}</div>
                <OperationInner
                    operationData={operations}
                    setModal={props.setModal}
                    isModal={props.isModal}
                    switchModal={props.switchModal}
                />
                <div>
                    <OperationModal
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
