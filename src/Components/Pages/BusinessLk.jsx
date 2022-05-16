import React, {useEffect} from "react";
import {Navigate, Route, Routes} from "react-router";
import BusinessMain from '../Lk/BusinessMain/BusinessMain'
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
                path="main"
                element={
                    <BusinessMain
                    />
                }
            />
        </Routes>
    );
};

export default BusinessLk;