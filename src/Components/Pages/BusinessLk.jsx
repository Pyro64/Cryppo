import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import BusinessLkMain from '../Lk/BusinessLkMain/BusinessLkMain'
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
                        updateChart={props.updateChart} />
                }
            />
        </Routes>
    );
};

export default BusinessLk;