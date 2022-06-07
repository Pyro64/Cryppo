import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import CryppoLkMainContainer from "./CryppoLk/CryppoLkMainContainer";
import CryppoLkSettings from "../Lk/CryppoLkSettings/CryppoLkSettings";
import CryppoLkTranslation from "../Lk/CryppoLkTranslation/CryppoLkTranslation";
import CryppoLkInvest from "../Lk/CryppoLkInvest/CryppoLkInvest";
import Event from "../Lk/Events/Event";

export default function CryppoLk(props) {
  // const get = () => props.getCryppoLkThunkCreator();
  // useEffect(() => {
  //   const interval = setInterval(get, 5000);
  // }, []);
  // alert(props.isLogin)
  if (props.isLogin === false) return <Navigate to={"/"} />;
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CryppoLkMainContainer/>
        }
      />
      <Route
        path="translations/*"
        element={<CryppoLkTranslation translations={props.translations} />}
      />
      <Route
        path="invest/*"
        element={
          <CryppoLkInvest
            tabs={props.tabs}
            composition={props.composition}
            changeActiveIndex={props.changeActiveIndex}
          />
        }
      />
      <Route
        path="settings/*"
        element={<CryppoLkSettings />}
        composition={props.composition}
      />
      <Route
        path="event/*"
        element={
          <Event
            updateChart={props.updateChart}
            operationData={props.operationData}
            expenses={props.expenses}
            arrival={props.arrival}
            setModal={props.setModal}
            operationModal={props.operationModal}
            isModal={props.isModal}
            switchModal={props.switchModal}
            chartTextData={props.chartTextData}
            setChartText={props.setChartText}
            initChartText={props.initChartText}
            isHover={props.isHover}
            operationsFilter={props.operationsFilter}
            filterOperationsThunkCreator={props.filterOperationsThunkCreator}
            inputChange={props.inputChange}
            filter={false}
            filterDate={props.filterDate}
          />
        }
      />
      <Route
        path="event/:category"
        element={
          <Event
            updateChart={props.updateChart}
            operationData={props.operationData}
            expenses={props.templateExpensesStatisticData}
            arrival={props.arrival}
            setModal={props.setModal}
            operationModal={props.operationModal}
            isModal={props.isModal}
            switchModal={props.switchModal}
            chartTextData={props.chartTextData}
            setChartText={props.setChartText}
            initChartText={props.initChartText}
            isHover={props.isHover}
            operationsFilter={props.operationsFilter}
            filterOperationsThunkCreator={props.filterOperationsThunkCreator}
            inputChange={props.inputChange}
            filter={true}
          />
        }
      />
      <Route
        path="event/:category/:subcategory"
        element={
          <Event
            updateChart={props.updateChart}
            operationData={props.operationData}
            expenses={props.templateExpensesStatisticData}
            arrival={props.templateArrivalStatisticData}
            setModal={props.setModal}
            operationModal={props.operationModal}
            isModal={props.isModal}
            switchModal={props.switchModal}
            chartTextData={props.chartTextData}
            setChartText={props.setChartText}
            initChartText={props.initChartText}
            isHover={props.isHover}
            operationsFilter={props.operationsFilter}
            filterOperationsThunkCreator={props.filterOperationsThunkCreator}
            inputChange={props.inputChange}
            filter={true}
          />
        }
      />
    </Routes>
  );
}
