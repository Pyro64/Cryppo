import axios from "axios";

export const WithdrawPost = (currency, address, destinationTag, amount) => {
    return axios
        .post("Withdraws/Withdraw", {
            currency,
            address,
            destinationTag,
            amount,
        })
        .then((response) => {
            return response.data.id;
        });
};

export const GenerateWithdrawCodeGet = (id) => {
    return axios
        .get("Withdraws/GenerateWithdrawCode/" + id)
        .then((response) => {
            return response.data;
        });
};

export const WithdrawConfirmPost = (id, emailCode, twoFactorCode) => {
    return axios
        .post("Withdraws/WithdrawConfirm", {
            id,
            emailCode,
            twoFactorCode,
        })
        .then((response) => {
            return response.data;
        });
};

export const FeesGet = (id) => {
    return axios.get("Withdraws/Fees").then((response) => {
        return response.data;
    });
};
