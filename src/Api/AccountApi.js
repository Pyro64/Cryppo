import { Api } from "./Api";
import { deleteCookie, setCookie } from "../Utils/cookies";

export const LoginPost = async (LoginBusinessRequest) => {
    const response = await Api.post("Account/Login", LoginBusinessRequest);
    deleteCookie("business_token");
    setCookie(
        "business_token",
        response.data.accessToken,
        response.data.accessTokenExpire,
        "/business"
    );
    return response.data;
};

export const RefreshTokenPost = async (token) => {
    const response = await Api.post("Account/RefreshToken", {
        token,
    });
    document.cookie = "business_token=" + response.data.accessToken;
    return response.data;
};

export const RegisterPost = async (email, password, company) => {
    const response = await Api.post("Account/Register", {
        email,
        password,
        company,
    });
    return response.data;
};

export const ConfirmEmailPost = async (email, code) => {
    const response = await Api.post("Account/ConfirmEmail", {
        email,
        code,
    });
    return response.data;
};

export const ForgotPasswordPost = async (email) => {
    const response = await Api.post("Account/ForgotPassword", {
        email,
    });
    return response.data;
};

export const ResetPasswordPost = async (
    email,
    resetPasswordCode,
    resetPasswordToken,
    newPassword,
    confirmPassword
) => {
    const response = await Api.post("Account/ResetPassword", {
        email,
        resetPasswordCode,
        resetPasswordToken,
        newPassword,
        confirmPassword,
    });
    return response.data;
};
export const SendDeviceConfirmationCodePost = async () => {
    const response = await Api.post("Account/SendDeviceConfirmationCode");
    console.log(response);
    return response.data;
};

export const DeviceConfirmPost = async (code) => {
    const response = Api.post("Account/DeviceConfirm", {
        code: "1111",
    });
    console.log(response.status);
    return response.data;
};

export const BalanceGet = async () => {
    const response = await Api.get("Balance/All");
    return response.data;
};
