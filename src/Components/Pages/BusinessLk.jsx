import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import BalanceContainer from "./BusinessLk/BalanceContainer";
import BusinessLkHistoryContainer from "./BusinessLk/BusinessLkHistoryContainer";
<<<<<<< HEAD
import BusinessLkStatisticContainer from "./BusinessLk/BusinessLkStatisticContainer";
import SettingLkContainer from "./BusinessLk/SettingLkContainer";
import Support from "../UI/Support/Support";
=======
import BusinessLkStatistic from "./BusinessLk/BusinessLkStatistic";
import SettingLk from "../Lk/SettingLk/SettingLk";
>>>>>>> 994d6948ca0d8f2da5a20b21daa177f846a4690f
import BusinessLkMainContainer from "./BusinessLk/BusinessLkMainContainer";
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
<<<<<<< HEAD
      <Route
        path="/"
        element={<BusinessLkMainContainer addCard={props.addCard} />}
      />
=======
      <Route path="/" element={<BusinessLkMainContainer />} />
>>>>>>> 994d6948ca0d8f2da5a20b21daa177f846a4690f
      <Route
        path="balance"
        element={
          <BalanceContainer/>
        }
      />
      <Route
        path="statistic"
        element={
<<<<<<< HEAD
          <BusinessLkStatisticContainer/>
=======
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
>>>>>>> 994d6948ca0d8f2da5a20b21daa177f846a4690f
        }
      />
      <Route path="history" element={<BusinessLkHistoryContainer />} />

      <Route
        path="setting"
        element={
          <SettingLkContainer/>
        }
      />
      <Route path="support" element={<Support />} />
    </Routes>
  );
};

export default BusinessLk;
