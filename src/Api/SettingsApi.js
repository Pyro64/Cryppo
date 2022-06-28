import axios from "axios";

export const SetActiveCurrencyPost = (currency) => {
    return axios
        .post("Settings/SetActiveCurrency", {
            currency,
        })
        .then((response) => {
            return response.data;
        });
};

export const SetViewCurrencyPost = (currency) => {
    return axios
        .post("Settings/SetViewCurrency", {
            currency,
        })
        .then((response) => {
            return response.data;
        });
};

export const SetNotificationsLangPost = (lang) => {
    return axios
        .post("Settings/SetNotificationsLang", {
            lang,
        })
        .then((response) => {
            return response.data;
        });
};

export const CheckPasswordPost = (password) => {
    return axios
        .post("Settings/CheckPassword", {
            password,
        })
        .then((response) => {
            return response.data;
        });
};

export const ChangePasswordPost = (
    currentPassword,
    password,
    passwordConfirm,
    twoFactorCode
) => {
    return axios
        .post("Settings/ChangePassword", {
            currentPassword,
            password,
            passwordConfirm,
            twoFactorCode,
        })
        .then((response) => {
            return response.data;
        });
};

export const ChangeNamePost = (firstname, lastname) => {
    return axios
        .post("Settings/ChangeName", {
            firstname,
            lastname,
        })
        .then((response) => {
            return response.data;
        });
};

export const TwoFactorInfoGet = () => {
    return axios.get("Settings/TwoFactorInfo").then((response) => {
        return response.data;
    });
};

export const ChangeEmailPost = (email, password) => {
    return axios
        .post("Settings/ChangeEmail", {
            email,
            password,
        })
        .then((response) => {
            return response.data;
        });
};

export const EnableTwoFactorPost = (code) => {
    return axios
        .post("Settings/EnableTwoFactor", {
            code,
        })
        .then((response) => {
            return response.data;
        });
};

export const CloseAccountGet = (code) => {
    return axios
        .get("Settings/CloseAccount", {
            code,
        })
        .then((response) => {
            return response.data;
        });
};

export const UploadPhotoPost = (file) => {
    return axios
        .post("Settings/UploadPhoto", {
            file,
        })
        .then((response) => {
            return response.data;
        });
};

export const ChangePhoneNumberPost = (phoneNumber, password) => {
    return axios
        .post("Settings/ChangePhoneNumber", {
            phoneNumber,
            password,
        })
        .then((response) => {
            return response.data;
        });
};

export const ConfirmPhoneNumberPost = (code) => {
    return axios
        .post("Settings/ConfirmPhoneNumber", {
            code,
        })
        .then((response) => {
            return response.data;
        });
};

export const SendEmailConfirmationCodePost = (email) => {
    return axios
        .post("Settings/SendEmailConfirmationCode", {
            email,
        })
        .then((response) => {
            return response.data;
        });
};

export const SendNotificationsPost = (notificationsSettings) => {
    return axios
        .post("Settings/SendEmailConfirmationCode", {
            notificationsSettings,
        })
        .then((response) => {
            return response.data;
        });
};

export const DeleteDevicePost = (id) => {
    return axios
        .post("Settings/DeleteDevice", {
            id,
        })
        .then((response) => {
            return response.data;
        });
};
