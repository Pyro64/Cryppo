import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import Balance from "../Lk/Balance/Balance";
import BusinessLkHistory from "../Lk/BusinessLkHistory/BusinessLkHistory";
import BusinessLkMain from "../Lk/BusinessLkMain/BusinessLkMain";
import BusinessLkStatistic from "../Lk/BusinessLkStatistic/BusinessLkStatistic";
import SettingLk from "../Lk/SettingLk/SettingLk";
const BusinessLk = (props) => {
  
  // const get = () => props.getCryppoLkThunkCreator();
  // useEffect(() => {
  //   const interval = setInterval(get, 5000);
  // }, []);
  // alert(props.isLogin)
  // if (props.isLogin === false) return <Navigate to={'/auth'} />
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BusinessLkMain
            composition={props.composition}
            card={props.card}
            historyItem={props.historyItem}
            operationData={props.operationData}
            setModal={props.setModal}
            operationModal={props.operationModal}
            isModal={props.isModal}
            switchModal={props.switchModal}
            filter={false}
            isHover={props.isHover}
            setChartText={props.setChartText}
            expenses={props.expenses}
            arrival={props.arrival}
            chartTextData={props.chartTextData}
            initChartText={props.initChartText}
            updateChart={props.updateChart}
            changeActiveIndex={props.changeActiveIndex}
          />
        }
      />
      <Route
        path="balance"
        element={
          <Balance
            card={props.card}
            historyItem={props.historyItem}
            operationData={props.operationData}
            setModal={props.setModal}
            operationModal={props.operationModal}
            isModal={props.isModal}
            switchModal={props.switchModal}
            filter={false}
            isHover={props.isHover}
            setChartText={props.setChartText}
            expenses={props.expenses}
            arrival={props.arrival}
            chartTextData={props.chartTextData}
            initChartText={props.initChartText}
            updateChart={props.updateChart}
            cashOption={props.cashOption}
          />
        }
      />
      <Route
        path="statistic"
        element={
          <BusinessLkStatistic
            composition={props.composition}
            card={props.card}
            historyItem={props.historyItem}
            operationData={props.operationData}
            setModal={props.setModal}
            operationModal={props.operationModal}
            isModal={props.isModal}
            switchModal={props.switchModal}
            filter={false}
            isHover={props.isHover}
            setChartText={props.setChartText}
            expenses={props.expenses}
            arrival={props.arrival}
            chartTextData={props.chartTextData}
            initChartText={props.initChartText}
            updateChart={props.updateChart}
            changeActiveIndex={props.changeActiveIndex}
          />
        }
      />
      <Route
        path="history"
        element={
          <BusinessLkHistory
            operationData={props.operationData}
            setModal={props.setModal}
            operationModal={props.operationModal}
            isModal={props.isModal}
            switchModal={props.switchModal}
            cashOption={props.cashOption}
          />
        }
      />
      <Route
      path="setting"
      element={<SettingLk
        setting={props.setting}
        />}
      />
    </Routes>
  );
};

export default BusinessLk;
