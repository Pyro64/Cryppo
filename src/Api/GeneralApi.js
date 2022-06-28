import { Api } from "./Api";
import getCookies, { deleteCookie } from "../Utils/cookies";

export const InfoGet = () => {
    return Api.get("General/Info", {
        Authorization: "bearer " + getCookies("business_token"),
    }).then((response) => {
        if (response.status === 401) {
            deleteCookie("business_token");
        }
        return response.data;
    });
};
