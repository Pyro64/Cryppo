import axios from "axios";
import { Api } from "./Api";

export const SetActiveCurrencyPost = (currency) => {
  return Api.post("Settings/SetActiveCurrency", {
    currency,
  }).then((response) => {
    return response.data;
  });
};

export const SetViewCurrencyPost = (currency) => {
  return Api.post("Settings/SetViewCurrency", {
    currency,
  }).then((response) => {
    return response.data;
  });
};

export const SetNotificationsLangPost = (lang) => {
  return Api.post("Settings/SetNotificationsLang", {
    lang,
  }).then((response) => {
    return response.data;
  });
};

export const CheckPasswordPost = (password) => {
  return Api.post("Settings/CheckPassword", {
    password,
  }).then((response) => {
    return response.data;
  });
};

export const ChangePasswordPost = (
  currentPassword,
  password,
  passwordConfirm,
  twoFactorCode
) => {
  return Api.post("Settings/ChangePassword", {
    currentPassword,
    password,
    passwordConfirm,
    twoFactorCode,
  }).then((response) => {
    return response.data;
  });
};

export const ChangeNamePost = (firstname, lastname) => {
  return Api.post("Settings/ChangeName", {
    firstname,
    lastname,
  }).then((response) => {
    return response.data;
  });
};

export const TwoFactorInfoGet = () => {
  return Api.get("Settings/TwoFactorInfo").then((response) => {
    return response.data;
  });
};

export const ChangeEmailPost = (email, password) => {
  return Api.post("Settings/ChangeEmail", {
    email,
    password,
  }).then((response) => {
    return response.data;
  });
};

export const EnableTwoFactorPost = (code) => {
  return Api.post("Settings/EnableTwoFactor", {
    code,
  }).then((response) => {
    return response.data;
  });
};

export const CloseAccountGet = (code) => {
  return Api.get("Settings/CloseAccount", {
    code,
  }).then((response) => {
    return response.data;
  });
};

export const UploadPhotoPost = (file) => {
  return Api.post("Settings/UploadPhoto", {
    file,
  }).then((response) => {
    return response.data;
  });
};

export const ChangePhoneNumberPost = (phoneNumber, password) => {
  return Api.post("Settings/ChangePhoneNumber", {
    phoneNumber,
    password,
  }).then((response) => {
    return response.data;
  });
};

export const ConfirmPhoneNumberPost = (code) => {
  return Api.post("Settings/ConfirmPhoneNumber", {
    code,
  }).then((response) => {
    return response.data;
  });
};

export const SendEmailConfirmationCodePost = (email) => {
  return Api.post("Settings/SendEmailConfirmationCode", {
    email,
  }).then((response) => {
    return response.data;
  });
};

export const SendNotificationsPost = (
  systemTg,
  systemEmail,
  entryTg,
  entryEmail,
  failEntryTg,
  failEntryEmail,
  paymentGetTg,
  paymentGetEmail,
  paymentConfirmedTg,
  paymentConfirmedEmail,
  passwordChangeTg,
  passwordChangeEmail,
  notificationsChangeTg,
  notificationsChangeEmail
) => {
  return Api.post("Settings/SendEmailConfirmationCode", {
    systemTg,
    systemEmail,
    entryTg,
    entryEmail,
    failEntryTg,
    failEntryEmail,
    paymentGetTg,
    paymentGetEmail,
    paymentConfirmedTg,
    paymentConfirmedEmail,
    passwordChangeTg,
    passwordChangeEmail,
    notificationsChangeTg,
    notificationsChangeEmail,
  }).then((response) => {
    return response.data;
  });
};
