import axios from "axios";

export const RevenuePost = (from, to, period) => {
    return axios
        .post("Statistic/Revenue", {
            from,
            to,
            period,
        })
        .then((response) => {
            return response.data;
        });
};
export const ChartPost = (from, to, period) => {
    return axios
        .post("Statistic/Chart", {
            from,
            to,
            period,
        })
        .then((response) => {
            return response.data;
        });
};
