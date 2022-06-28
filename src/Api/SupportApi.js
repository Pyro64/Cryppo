import axios from "axios";

export const AddTickerPost = (subject, message) => {
    return axios
        .put("Support/AddTicker", {
            subject,
            message,
        })
        .then((response) => {
            return response.data;
        });
};
export const ChartPost = (from, to, period) => {
    return axios
        .post("Support/Chart", {
            from,
            to,
            period,
        })
        .then((response) => {
            return response.data;
        });
};
