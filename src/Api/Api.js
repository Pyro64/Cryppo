import axios from "axios";
import getCookies from "../Utils/cookies";

export const Api = axios.create({
    baseURL: "https://b.cryppowallet.com/",
});
Api.interceptors.request.use(
    (config) => {
        const token = getCookies("business_token");
        const auth = token ? `Bearer ${token}` : "";
        config.headers.common["Authorization"] = auth;
        return config;
    },
    (error) => Promise.reject(error)
);

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
