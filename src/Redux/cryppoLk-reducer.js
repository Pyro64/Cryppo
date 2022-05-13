import bag from "../Images/icon/bag.svg";
import qron from "../Images/icon/qron.svg";
import elementum from "../Images/icon/elementum.svg";
import index from "../Images/icon/index.svg";
import profit from "../Images/icon/profit.svg";
import plus from "../Images/icon/plus.svg";
import { CryppoLkGet } from "../Api/api";
import gipo from "../Images/icon/gipo.svg";
import calculate from "../Images/news/1.svg";
import analitica from "../Images/news/2.svg";
import cryptocard from "../Images/news/3.svg";
import cryptocard2 from "../Images/news/4.svg";

const GET = "GET";
const SET_MODAL = "SET_MODAL";
const SWITCH_MODAL = "SWITCH_MODAL";
const SET_CHART_TEXT = "SET_CHART_TEXT";
const INIT_CHART_TEXT = "INIT_CHART_TEXT";

let initialState = {
    investData: {
        id: 1,
        title: "Инвестиции CRYPPO INDEX",
        icon: bag,
        crypto: "0.00000000",
        cash: "0.00",
        povered: "Powered by Elementum",
        poveredIcon: elementum,
    },
    newCardData: {
        id: 1,
        title: "Привязать карту",
        povered: "Powered by QRON",
        poveredIcon: qron,
    },
    operationModal: {
        id: null,
        type: null,
        icon: null,
        title: null,
        check: null,
        data: null,
        iconPay: null,
        currencyPay: null,
        cash: null,
        firm: null,
        bankCardData: {
            id: null,
            number: null,
            logo: null,
            color: null,
        },
        status: {
            color: null,
            text: null,
        },
    },
    isModal: false,
    tabsData: {
        invest: {
            id: 1,
            icon: bag,
            title: "Инвестиции CRYPPO INVEST",
            statistic: "0.00000000",
            cash: "$ 0.00",
            text: "Powered by Elementum",
            povered: elementum,
        },

        addCart: {
            id: 1,
            icon: plus,
            title: "Привязать карту",
            text: "Powered by QRON",
            povered: qron,
        },

        indexNow: {
            id: 1,
            icon: index,
            title: "Текущая стоимость индекса",
            cash: "$ 28.84",
        },

        volumeIndex: {
            id: 1,
            icon: bag,
            title: "Объем вашего индекса",
            statistic: "0.00000000 TOP8",
            cash: "$ 0.00",
        },

        indexProfit: {
            id: 1,
            icon: profit,
            title: "Индексный доход за сегодня",
            statistic: "$ 0.00",
            text: "0% за последние 30 дней",
        },

        buyNow: {
            id: 1,
            icon: plus,
            title: "Купить индекс",
        },
    },
    newsData: [
        {
            id: 1,
            img: calculate,
            text: "Ваши траты за месяц",
        },
        {
            id: 2,
            img: analitica,
            text: "Аналитика",
        },
        {
            id: 3,
            img: cryptocard,
            text: "Криптокарта",
        },
        {
            id: 4,
            img: cryptocard2,
            text: "Криптокарта",
        },
        {
            id: 5,
            img: calculate,
            text: "Ваши траты за месяц",
        },
        {
            id: 6,
            img: analitica,
            text: "Аналитика",
        },
        {
            id: 7,
            img: cryptocard,
            text: "Криптокарта",
        },
        {
            id: 8,
            img: cryptocard2,
            text: "Криптокарта",
        },
    ],
    translationsData: [
        {
            id: 1,
            title: "По номеру телефона",
            icon: gipo,
        },
        {
            id: 2,
            title: "По номеру карты",
            icon: gipo,
        },
        {
            id: 3,
            title: "По реквизитам",
            icon: gipo,
        },
        {
            id: 4,
            title: "Между своими счетами",
            icon: gipo,
        },
        {
            id: 5,
            title: "По номеру карты",
            icon: gipo,
        },
        {
            id: 6,
            title: "По реквизитам",
            icon: gipo,
        },
    ],
    chartTextData: {
        category: "Расходы",
        cash: "100",
        percent: "100%",
    },
};

const cryppoLkReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET:
            return {
                ...state,
                ...action.value,
            };
        case SET_MODAL:
            return {
                ...state,
                operationModal: action.value,
            };
        case SWITCH_MODAL:
            return {
                ...state,
                isModal: action.isModal,
            };
        case SET_CHART_TEXT:
            return {
                ...state,
                chartTextData: action.value,
                isHover: true,
            };
        case INIT_CHART_TEXT:
            return {
                ...state,
                chartTextData: initialState.chartTextData,
                isHover: false,
            };

        
        default:
            return state;
    }
};

export const getCryppoLkThunkCreator = () => {
    return (dispatch) => {
        CryppoLkGet()
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch({ type: "GET", value });
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
}
export const initChartText = () => ({ type: INIT_CHART_TEXT });
export const setChartText = (value) => ({ type: SET_CHART_TEXT, value });
export const switchModal = (isModal) => ({ type: SWITCH_MODAL, isModal });
export const setModal = (value) => ({ type: SET_MODAL, value });
export const get = (value) => ({ type: GET, value });
export default cryppoLkReducer;
