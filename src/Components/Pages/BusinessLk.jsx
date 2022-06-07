import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import BalanceContainer from "../Lk/Balance/BalanceContainer";
import BusinessLkHistoryContainer from "../Lk/BusinessLkHistory/BusinessLkHistoryContainer";
import BusinessLkStatisticContainer from "../Lk/BusinessLkStatistic/BusinessLkStatisticContainer";
import SettingLkContainer from "../Lk/SettingLk/SettingLkContainer";
import Support from "../UI/Support/Support";
import BusinessLkMainContainer from "../Lk/BusinessLkMain/BusinessLkMainContainer";
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
        element={<BusinessLkMainContainer addCard={props.addCard} />}
      />
      <Route
        path="balance"
        element={
          <BalanceContainer/>
        }
      />
      <Route
        path="statistic"
        element={
          <BusinessLkStatisticContainer/>
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
