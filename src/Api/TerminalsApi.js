import { Api } from "./Api";

export const AddPost = (name, login, password, passwordConfirm) => {
    return Api.post("Terminals/add", {
        name,
        login,
        password,
        passwordConfirm,
    }).then((response) => {
        return response.data;
    });
};

export const ChangeNamePost = (name, id) => {
    return Api.post("Terminals/ChangeName", {
        name,
        id,
    }).then((response) => {
        return response.data;
    });
};

export const ChangeLoginPost = (login, id) => {
    return Api.post("Terminals/ChangeLogin", {
        login,
        id,
    }).then((response) => {
        return response.data;
    });
};

export const ChangePasswordPost = (passwordConfirm, password, id) => {
    return Api.post("Terminals/ChangePassword", {
        passwordConfirm,
        password,
        id,
    }).then((response) => {
        return response.data;
    });
};
export const DeletePost = (id) => {
    return Api.post("Terminals/Delete", {
        id,
    }).then((response) => {
        return response.data;
    });
};
