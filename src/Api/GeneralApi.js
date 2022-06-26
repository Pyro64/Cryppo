import { Api } from "./Api";
import getCookies from "../Utils/cookies";

export const InfoGet = () => {
    const header = {
        headers: { Authorization: "bearer " + getCookies("access_token") },
    };
    return Api.get("General/Info", header).then((response) => {
        return response.data;
    });
};
