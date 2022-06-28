import axios from "axios";

export const LoginPost = async (LoginBusinessRequest) => {
    const response = await axios.post("Account/Login", LoginBusinessRequest);
    return response;
};

export const RefreshTokenPost = async (token) => {
    const response = await axios.post("Account/RefreshToken", {
        token,
    });
    return response;
};

export const RegisterPost = async (email, password, company) => {
    const response = await axios.post("Account/Register", {
        email,
        password,
        company,
    });
    return response.data;
};

export const ConfirmEmailPost = async (email, code) => {
    const response = await axios.post("Account/ConfirmEmail", {
        email,
        code,
    });
    return response.data;
};

export const ForgotPasswordPost = async (email) => {
    const response = await axios.post("Account/ForgotPassword", {
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
    const response = await axios.post("Account/ResetPassword", {
        email,
        resetPasswordCode,
        resetPasswordToken,
        newPassword,
        confirmPassword,
    });
    return response.data;
};
export const SendDeviceConfirmationCodePost = async () => {
    const response = await axios.post("Account/SendDeviceConfirmationCode");
    console.log(response);
    return response.data;
};

export const DeviceConfirmPost = async (code) => {
    const response = axios.post("Account/DeviceConfirm", {
        code: "1111",
    });
    console.log(response.status);
    return response.data;
};

export const BalanceGet = async () => {
    const response = await axios.get("Balance/All");
    return response.data;
};
