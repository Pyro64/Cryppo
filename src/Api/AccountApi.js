import { Api } from "./Api";

export const LoginPost = (email, password) => {
    return Api.post("Account/Login", {
        email,
        password,
        twoFactorCode: "",
        deviceId: "1",
        deviceOs: "Android Pie",
        deviceIp: "192.168.0.1",
    }).then((response) => {
        document.cookie = "access_token=" + response.data.accessToken;
        return response.data;
    });
};

export const RefreshTokenPost = (token) => {
    return Api.post("Account/RefreshToken", {
        token,
    }).then((response) => {
        document.cookie = "access_token=" + response.data.accessToken;
        return response.data;
    });
};

export const RegisterPost = (email, password, company) => {
    return Api.post("Account/Register", {
        email,
        password,
        company,
    }).then((response) => {
        return response.data;
    });
};

export const ConfirmEmailPost = (email, code) => {
    return Api.post("Account/ConfirmEmail", {
        email,
        code,
    }).then((response) => {
        return response.data;
    });
};

export const ForgotPasswordPost = (email) => {
    return Api.post("Account/ForgotPassword", {
        email,
    }).then((response) => {
        return response.data;
    });
};

export const ResetPasswordPost = (
    email,
    resetPasswordCode,
    resetPasswordToken,
    newPassword,
    confirmPassword
) => {
    return Api.post("Account/ResetPassword", {
        email,
        resetPasswordCode,
        resetPasswordToken,
        newPassword,
        confirmPassword,
    }).then((response) => {
        return response.data;
    });
};

export const BalanceGet = () => {
    return Api.get("Balance/All").then((response) => {
        return response.data;
    });
};

export const GeneralInfoGet = () => {
    return Api.get("General/Info").then((response) => {
        return response.data;
    });
};
