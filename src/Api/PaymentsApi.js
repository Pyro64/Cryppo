import axios from "axios";

export const PaymentsCreatePost = (
    currency,
    amount,
    amountUsd,
    shopId,
    email,
    billingId
) => {
    return axios
        .post("Payments/Create", {
            currency,
            amount,
            amountUsd,
            shopId,
            email,
            billingId,
        })
        .then((response) => {
            return response.data;
        });
};

export const PaymentsPost = (
    pageNumber,
    pageSize,
    from,
    to,
    currency,
    status,
    address
) => {
    return axios
        .post("Payments/Payments", {
            pageNumber,
            pageSize,
            from,
            to,
            currency,
            status,
            address,
        })
        .then((response) => {
            return response.data;
        });
};
