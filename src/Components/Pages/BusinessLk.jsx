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
                    <BusinessLkMain historyItem={props.historyItem} coin={props.coin} />
                }
            />
        </Routes>
    );
};

export default BusinessLk;