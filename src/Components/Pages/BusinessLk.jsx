import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import Balance from "../Lk/Balance/Balance";
import BusinessLkHistory from "../Lk/BusinessLkHistory/BusinessLkHistory";
import BusinessLkMain from "../Lk/BusinessLkMain/BusinessLkMain";
import BusinessLkStatistic from "../Lk/BusinessLkStatistic/BusinessLkStatistic";
import Email from "../Lk/Email/Email";
import SettingLk from "../Lk/SettingLk/SettingLk";
import Support from "../UI/Support/Support";
const BusinessLk = (props) => {
  // const get = () => props.getCryppoLkThunkCreator();
  // useEffect(() => {
  //   const interval = setInterval(get, 5000);
  // }, []);
  // alert(props.isLogin)
  if (props.isLogin === false) return <Navigate to={"/business"} />;
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
            cashOption={props.cashOption}
            disableItem={props.disableItem}
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
            disableItem={props.disableItem}
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
            disableItem={props.disableItem}
            cashOption={props.cashOption}
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
            filterValute={props.filterValute}
            filterWallet={props.filterWallet}
            filterDate={props.filterDate}
          />
        }
      />

      <Route
        path="setting"
        element={
          <SettingLk
            setting={props.setting}
            langOption={props.langOption}
            cashOption={props.cashOption}
            user={props.user}
            settingOption={props.settingOption}
            connectOption={props.connectOption}
            deleteAddress={props.deleteAddress}
          />
        }
      />
    </Routes>
  );
};

export default BusinessLk;
