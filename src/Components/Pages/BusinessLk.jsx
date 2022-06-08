import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import BalanceContainer from "../Lk/Balance/BalanceContainer";
import BusinessLkHistoryContainer from "../Lk/BusinessLkHistory/BusinessLkHistoryContainer";
import BusinessLkStatisticContainer from "../Lk/BusinessLkStatistic/BusinessLkStatisticContainer";
import SettingLkContainer from "../Lk/SettingLk/SettingLkContainer";
import Balance from "../Lk/Balance/Balance";
import BusinessLkHistory from "../Lk/BusinessLkHistory/BusinessLkHistory";
import BusinessLkMain from "../Lk/BusinessLkMain/BusinessLkMain";
import BusinessLkStatistic from "../Lk/BusinessLkStatistic/BusinessLkStatistic";
import Email from "../Lk/Email/Email";
import SupportLk from "../Lk/SupportLk/SupportLk";
import SettingLk from "../Lk/SettingLk/SettingLk";
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
      <Route
        path="/"
        element={<BusinessLkMainContainer addCard={props.addCard} />}
      />
      <Route path="balance" element={<BalanceContainer />} />
      <Route path="statistic" element={<BusinessLkStatisticContainer />} />
      <Route path="history" element={<BusinessLkHistoryContainer />} />

      <Route path="setting" element={<SettingLkContainer />} />
      <Route path="support" element={<SupportLk help={props.help} />} />
    </Routes>
  );
};

export default BusinessLk;
