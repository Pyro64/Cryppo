import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import CryppoLkMainContainer from "../Lk/CryppoLkMain/CryppoLkMainContainer";
import CryppoLkSettings from "../Lk/CryppoLkSettings/CryppoLkSettings";
import CryppoLkTranslationContainer from "../Lk/CryppoLkTranslation/CryppoLkTranslationContainer";
import CryppoLkInvestContainer from "../Lk/CryppoLkInvest/CryppoLkInvestContainer";
import EventContainer from "../Lk/Events/EventContainer";
import PageWork from "../Lk/PageWork/PageWork";
export default function CryppoLk(props) {
  // const get = () => props.getCryppoLkThunkCreator();
  // useEffect(() => {
  //   const interval = setInterval(get, 5000);
  // }, []);
  // alert(props.isLogin)
  if (props.isLogin === false) return <Navigate to={"/"} />;
  return (
    <Routes>
      <Route path="/" element={<CryppoLkMainContainer />} />
      <Route path="translations/*" element={<CryppoLkTranslationContainer />} />
      <Route path="pageWork" element={<PageWork />}></Route>
      <Route path="invest/*" element={<CryppoLkInvestContainer />} />
      <Route path="settings/*" element={<CryppoLkSettings />} />
      <Route path="history" element={<PageWork />} />
      <Route
        path="event/*"
        element={
          <EventContainer
            expenses={props.expenses}
            arrival={props.arrival}
            filter={false}
          />
        }
      />
      <Route
        path="event/:category"
        element={
          <EventContainer
            filter={true}
            expenses={props.tempExpenses}
            arrival={props.tempArrival}
          />
        }
      />
      <Route
        path="event/:category/:subcategory"
        element={
          <EventContainer
            filter={true}
            expenses={props.tempExpenses}
            arrival={props.tempArrival}
          />
        }
      />
    </Routes>
  );
}
