import React from "react";
import style from "./Event.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import StatisticMainItem from "../StatisticMain/StatisticMainItem";
import ChartText from "../StatisticMain/ChartText";
import {useParams} from "react-router-dom";
import OperationInner from "../CryppoLk/CryppoLkComponents/OperationLk/OperationInner";
import OperationModal from "../Modal/OperationModal";
import s from "../../Lk/CryppoLk/CryppoLkComponents/OperationLk/Operation.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const Event = (props) => {
    const {category, subcategory} = useParams();
    let operations = props.operationData.operation;
    let currency = props.currency;
    if (category !== undefined){
        currency = props.currency.filter((item)=>{
            return item.category === category
        });
        currency = currency[0];
        operations = operations.filter((item) =>{
            return item.type === category
        })
    }
    let dataItems = [];
    let backgroundColorItems = [];
    let elementItem = [];
    if (Array.isArray(currency)){
        currency.map((e) => {
            dataItems.push(e.percent);
            backgroundColorItems.push(e.color);
        });
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
    }

    
    
    if (category !== undefined){
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
            />
        ));
    }
    const options = {
        plugins: {
            tooltip: {
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
                <ChartText isHover={props.isHover} chartTextData={props.chartTextData} />
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
          <OperationModal operationModal={props.operationModal} isModal={props.isModal} switchModal={props.switchModal} />
        </div>
      </div>
    </div>
  );
};

export default Event;
