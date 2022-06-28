import axios from "axios";
import getCookies from "../Utils/cookies";

export const AddPost = (name, login, password, passwordConfirm) => {
    return axios
        .post("Terminals/add", {
            name,
            login,
            password,
            passwordConfirm,
        })
        .then((response) => {
            return response.data;
        });
};

export const ChangeNamePost = (name, id) => {
    return axios
        .post("Terminals/ChangeName", {
            name,
            id,
        })
        .then((response) => {
            return response.data;
        });
};

export const ChangeLoginPost = (login, id) => {
    return axios
        .post("Terminals/ChangeLogin", {
            login,
            id,
        })
        .then((response) => {
            return response.data;
        });
};

export const ChangePasswordPost = (passwordConfirm, password, id) => {
    return axios
        .post("Terminals/ChangePassword", {
            passwordConfirm,
            password,
            id,
        })
        .then((response) => {
            return response.data;
        });
};
export const DeletePost = (id) => {
    return axios
        .post("Terminals/Delete", {
            id,
        })
        .then((response) => {
            return response.data;
        });
};
