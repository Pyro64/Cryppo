import React from 'react';
import SubtitleLk from '../SubtitleLk/SubtitleLk';
import style from "./StatisticMoney.module.scss";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const StatisticMoney = () => {

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        hoverOffset: 10,
      },
    ],
  };
  const options = {
    plugins: {
      // legend: {
      //   display: false,
      //   labels: {
      //     color: 'rgba(255, 99, 132,0.1)'
      //   }
      // },
      subtitle: {
        display: true,
        text: 'Custom Chart Subtitle'
      }
    }
  }


  return (
    <div сlassName={style.container}>
      <SubtitleLk arrow={true} subtitle='Статистика за март' />
      <div className={style.block}>
        <Tabs>
          <TabList className={style.list}>
            <Tab className={style.tab} selectedClassName={style.activeTab}><p>Расходы</p></Tab>
            <Tab className={style.tab} selectedClassName={style.activeTab}><p>Поступления</p></Tab>
          </TabList>
          <TabPanel>
            <div className={style.chartInner}>
              <Doughnut data={data} options={options} />
            </div>
          </TabPanel>
          <TabPanel>
            <h2>tab 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default StatisticMoney;
