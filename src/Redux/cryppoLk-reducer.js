import usd from "../Images/payIcon/12.svg";
import icx from "../Images/payIcon/6.svg";
import arde from "../Images/payIcon/arde.svg";
import eth from "../Images/payIcon/eth.svg";
import masterCard from "../Images/icon/mastercard.svg";
import bag from "../Images/icon/bag.svg";
import qron from "../Images/icon/qron.svg";
import elementum from "../Images/icon/elementum.svg";
import calculate from "../Images/news/1.svg";
import analitica from "../Images/news/2.svg";
import cryptocard from "../Images/news/3.svg";
import cryptocard2 from "../Images/news/4.svg";
import visa from "../Images/icon/VISA.svg";
import yandex from "../Images/icon/yandex.svg";
import gipo from "../Images/icon/gipo.svg";
import arrow from "../Images/icon/arrow.svg";
import index from "../Images/icon/index.svg";
import profit from "../Images/icon/profit.svg";
import plus from "../Images/icon/plus.svg";

import { CryppoLkGet } from "../Api/api";
const GET = "GET";
const SET_MODAL = "SET_MODAL";
const SWITCH_MODAL = "SWITCH_MODAL";
const SET_CHART_TEXT = "SET_CHART_TEXT";
const INIT_CHART_TEXT = "INIT_CHART_TEXT";

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
    access: {
      color: "linear-gradient(91.42deg, #2F69FF 0%, #00C0A9 100%)",
      text: "Операция одобрена",
    },
  },
};

let initialState = {
  cardData: [
    {
      id: 1,
      icon: eth,
      text: "ETH",
      availability: "00000000000000001.234 ETH",
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
  operationData: {
    title: "Сегодня",
    operation: [
      {
        id: 1,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 1",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "3 марта, 16:35",
        iconPay: eth,
        currencyPay: "ETH",
        status: false,
        cash: -1.234,
        firm: "Яндекс",
        bankCardData: {
          id: 1,
          number: 5678,
          logo: masterCard,
          color: "#2F69FF",
        },
        status: statusPay.status.error,
      },
      {
        id: 2,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 2",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "3 марта, 16:35",
        iconPay: eth,
        currencyPay: "ETH",
        status: false,
        firm: "Яндекс",
        cash: -1.234,
        bankCardData: {
          id: 1,
          number: 5678,
          logo: masterCard,
          color: "#2F69FF",
        },
        status: statusPay.status.error,
      },
      {
        id: 3,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 3",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "3 марта, 16:35",
        iconPay: eth,
        currencyPay: "ETH",
        status: false,
        firm: "Яндекс",
        cash: -1.234,
        bankCardData: {
          id: 1,
          number: 5678,
          logo: masterCard,
          color: "#2F69FF",
        },
        status: statusPay.status.load,
      },
      {
        id: 4,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 4",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "3 марта, 16:35",
        iconPay: eth,
        currencyPay: "ETH",
        firm: "Яндекс",
        status: false,
        cash: -1.234,
        bankCardData: {
          id: 1,
          number: 5678,
          logo: masterCard,
          color: "#2F69FF",
        },
        status: statusPay.status.access,
      },
    ],
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
    status: null,
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
  currencyStatisticData: [
    {
      id: 1,
      category: "Транспорт",
      cash: 9.56,
      currency: "USD",
      color: "#2F69FF",
      percent: 10,
    },
    {
      id: 2,
      category: "Cвязь",
      cash: 4.56,
      currency: "USD",
      color: "#FF612F",
      percent: 5,
    },
    {
      id: 3,
      category: "Супермаркеты",
      cash: 6.56,
      currency: "USD",
      color: "#BC2FFF",
      percent: 8,
    },
    {
      id: 4,
      category: "Переводы",
      cash: 5.56,
      currency: "USD",
      color: "#FF40D5",
      percent: 5,
    },
    {
      id: 5,
      category: "Остальное",
      cash: 12.56,
      currency: "USD",
      color: "#FF4949",
      percent: 12,
    },
  ],
  chartTextData: {
    category: "Расходы",
    cash: "10000",
    percent: 100,
  },
  isHover: false,
  composition: [{}, {}],
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
};
export const initChartText = () => ({ type: INIT_CHART_TEXT });
export const setChartText = (value) => ({ type: SET_CHART_TEXT, value });
export const switchModal = (isModal) => ({ type: SWITCH_MODAL, isModal });
export const setModal = (value) => ({ type: SET_MODAL, value });
export const get = (value) => ({ type: GET, value });
export default cryppoLkReducer;
