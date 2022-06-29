import usd from "../Images/payIcon/12.svg";
import icx from "../Images/payIcon/6.svg";
import arde from "../Images/payIcon/arde.svg";
import eth from "../Images/payIcon/eth.svg";
import visa from "../Images/icon/VISA.svg";
import masterCard from "../Images/icon/mastercard.svg";
import yandex from "../Images/icon/yandex.svg";
import arrow from "../Images/icon/arrow.svg";
import elementum from "../Images/icon/elementum.svg";
import gipo from "../Images/icon/gipo.svg";

const CHANGE_ACTIVE_INDEX = "CHANGE_ACTIVE_INDEX";
const FILTER_OPERATIONS = "FILTER_OPERATIONS";
let statusPay = {
    status: {
        error: {
            color: "linear-gradient(122.76deg, #FF6969 0%, #FF3E3E 92.55%)",
            text: "Операция отклонена",
        },
        load: {
            color: "linear-gradient(91.42deg, #FFEA2F 0%, #FF612F 100%), #C4C4C4",
            text: "Операция в обработке",
        },
        Success: {
            color: "linear-gradient(91.42deg, #2F69FF 0%, #00C0A9 100%)",
            text: "Операция одобрена",
        },
    },
};

let initialState = {
    business: {
        operationList: [
            {
                id: 1,
                address: "kdgка67lvkdlwwwebfgbfJFsodokfNFT",
                status: "Success",
                currency: "ETH",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 2,
                address: "ervndGVKUBhediu523dpiuvJBUGH3ub",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 3,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 4,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 5,
                address: "rkjnarelknjrure9w09idfv0f9evf",
                status: "Success",
                currency: "ETH",
                amount: 76.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 6,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 7,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "ETH",
                amount: 99.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 8,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 9,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "ETH",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 10,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
        ],
    },
    cryppo: {
        operationList: [
            {
                id: 1,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "ETH",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 2,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 3,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 4,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "ETH",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 5,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "BTC",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
            {
                id: 6,
                address: "kdgка67lvkdlfdboTGFsodokfNFT",
                status: "Success",
                currency: "ETH",
                amount: 100.0,
                date: "2022-06-01T11:30:38.121Z",
                transactions: null,
                protocol: "string",
                blockchain: null,
            },
        ],
        cardData: [
            {
                id: 1,
                icon: eth,
                text: "ETH",
                availability: "1.234 ETH",
                prise: "9 656 $",
            },
            {
                id: 2,
                icon: icx,
                text: "ICX",
                availability: "78.444 ICX",
                prise: "9 656 $",
            },
            {
                id: 3,
                icon: arde,
                text: "ARDE",
                availability: "17.235 ARDE",
                prise: "9 656 $",
            },
            {
                id: 4,
                icon: usd,
                text: "USD",
                availability: "56.254 USD",
                prise: "9 656 $",
            },
        ],
        bankCardData: [
            {
                id: 1,
                number: 5678,
                logo: masterCard,
            },
            {
                id: 2,
                number: 7658,
                logo: visa,
            },
        ],
        statisticData: [
            {
                id: 1,
                text: "Самая большая покупка",
                title: "Paw*comfortbooking",
                icon: gipo,
                descripthion: "690 $",
            },
            {
                id: 2,
                text: "Чаще всего покупали",
                title: "Яндекс Такси",
                icon: yandex,
                descripthion: "27 раз",
            },
            {
                id: 3,
                text: "Вы заработали на CRYPPO INDEX",
                title: "0.00 $",
                icon: elementum,
                descripthion: "",
            },
            {
                id: 4,
                text: "Всего покупок",
                title: "1.678 $",
                icon: arrow,
                descripthion: "Больше февраля на 345 $",
            },
        ],
        isHover: false,
    },
    templateExpensesStatisticData: [],
    templateArrivalStatisticData: [],
};
const operationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_OPERATIONS:
            return {
                ...state,
                expensesStatisticData: action.value.currency,
            };
        case CHANGE_ACTIVE_INDEX:
            return {
                ...state,
                barData: {
                    activeIndex: action.value,
                    compositions: state.cryppo.barData.compositions,
                },
            };
        default:
            return state;
    }
};

export const changeActiveIndex = (value) => ({
    type: CHANGE_ACTIVE_INDEX,
    value,
});
export default operationReducer;
