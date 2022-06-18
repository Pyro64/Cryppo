import * as ActionType from "./ActionTypes/UsersActionTypes";
import { createSlice } from "@reduxjs/toolkit";
import * as StatisticApi from "../Api/StatisticApi";

let initialState = {
    business: {
        revenue: [
            {
                amount: 3,
                currency: "BTC",
                amountInViewCurrency: 68552,
                percent: 10,
            },
            {
                amount: 16,
                currency: "ETH",
                amountInViewCurrency: 597,
                percent: 4,
            },
            {
                amount: 5,
                currency: "ASDX",
                amountInViewCurrency: 647,
                percent: 8,
            },
            {
                amount: 83,
                currency: "BNB",
                amountInViewCurrency: 194,
                percent: -24,
            },
            {
                amount: 5,
                currency: "ICX",
                amountInViewCurrency: 385,
                percent: 61,
            },
            {
                amount: 17,
                currency: "ARDE",
                amountInViewCurrency: 194,
                percent: 13,
            },
        ],
        chartIndex: [
            {
                date: "2022-05-16T06:17:13.618Z",
                amount: 10,
            },
            {
                date: "2022-06-16T06:17:13.618Z",
                amount: 15,
            },
            {
                date: "2022-07-16T06:17:13.618Z",
                amount: 14,
            },
            {
                date: "2022-08-16T06:17:13.618Z",
                amount: 20,
            },
        ],
    },
    cryppo: {
        revenue: [
            {
                amount: 3,
                currency: "BTC",
                amountInViewCurrency: 68552,
                percent: 10,
            },
            {
                amount: 16,
                currency: "ETH",
                amountInViewCurrency: 597,
                percent: 4,
            },
            {
                amount: 5,
                currency: "ASDX",
                amountInViewCurrency: 647,
                percent: 8,
            },
            {
                amount: 83,
                currency: "BNB",
                amountInViewCurrency: 194,
                percent: -24,
            },
            {
                amount: 5,
                currency: "ICX",
                amountInViewCurrency: 385,
                percent: 61,
            },
            {
                amount: 17,
                currency: "ARDE",
                amountInViewCurrency: 194,
                percent: 13,
            },
        ],
    },
};
export const lkSlice = createSlice({
    name: "lk",
    initialState,
    reducers: {
        SetRevenue(state, action) {
            state.business.revenue = action.payload;
        },
        SetChartIndex(state, action) {
            state.business.chartIndex = action.payload;
        },
    },
});

export const RevenuePostTC = (from, to, period) => {
    return (dispatch) => {
        StatisticApi.RevenuePost(from, to, period)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(lkSlice.actions.SetRevenue(value));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};
export const ChartPostTC = (from, to, period) => {
    return (dispatch) => {
        StatisticApi.ChartPost(from, to, period)
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch(lkSlice.actions.SetChartIndex(value));
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
};
export default lkSlice.reducer;
