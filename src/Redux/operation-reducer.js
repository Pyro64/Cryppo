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
import btc from "../Images/payIcon/1.svg";
import ltc from "../Images/payIcon/2.svg";
import xrp from "../Images/payIcon/7.svg";
import xtz from "../Images/payIcon/5.svg";
import eos from "../Images/payIcon/4.svg";
import bnb from "../Images/payIcon/BNB.svg";
import bch from "../Images/payIcon/BCH.svg";
// import filtersTool from "../Utils/filter";
const CHANGE_ACTIVE_INDEX = "CHANGE_ACTIVE_INDEX";
const FILTER_OPERATIONS = "FILTER_OPERATIONS";
const UPDATE_CHART = "UPDATE_CHART";

const INPUT_CHANGE = "INPUT_CHANGE";
const DISABLE_ITEM = "DISABLE_ITEM";
const FILTER_DATE = "FILTER_DATE";
const FILTER_VALUTE = "FILTER_VALUTE";
const FILTER_WALLET = "FILTER_WALLET";
const DELETE_ITEM = "DELETE_ITEM";
let CURRENCY = null;
let QUERY = null;
let DATERANGE = null;

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
  business: {
    history: {
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
          cash: -1.234,
          bankCardData: {
            id: 1,
            number: 5678,
            logo: masterCard,
            color: "#2F69FF",
          },
          status: statusPay.status.access,
        },
        {
          id: 5,
          type: "Транспорт",
          icon: yandex,
          title: "Яндекс Такси 4",
          check: "kdgка67lvkdlfdboTGFsodokfNFT",
          data: "3 марта, 16:35",
          iconPay: eth,
          currencyPay: "ETH",
          firm: "Яндекс",
          cash: -1.234,
          bankCardData: {
            id: 1,
            number: 5678,
            logo: masterCard,
            color: "#2F69FF",
          },
          status: statusPay.status.access,
        },
        {
          id: 6,
          type: "Транспорт",
          icon: yandex,
          title: "Яндекс Такси 4",
          check: "kdgка67lvkdlfdboTGFsodokfNFT",
          data: "3 марта, 16:35",
          iconPay: eth,
          currencyPay: "ETH",
          firm: "Яндекс",
          cash: -1.234,
          bankCardData: {
            id: 1,
            number: 5678,
            logo: masterCard,
            color: "#2F69FF",
          },
          status: statusPay.status.access,
        },
        {
          id: 7,
          type: "Транспорт",
          icon: yandex,
          title: "Яндекс Такси 4",
          check: "kdgка67lvkdlfdboTGFsodokfNFT",
          data: "3 марта, 16:35",
          iconPay: eth,
          currencyPay: "ETH",
          firm: "Яндекс",
          cash: -1.234,
          bankCardData: {
            id: 1,
            number: 5678,
            logo: masterCard,
            color: "#2F69FF",
          },
          status: statusPay.status.access,
        },
        {
          id: 8,
          type: "Транспорт",
          icon: yandex,
          title: "Яндекс Такси 4",
          check: "kdgка67lvkdlfdboTGFsodokfNFT",
          data: "3 марта, 16:35",
          iconPay: eth,
          currencyPay: "ETH",
          firm: "Яндекс",
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
    barData: {
      activeIndex: 0,
      compositions: [
        {
          id: 1,
          name: "BTC",
          icon: btc,
          percent: 35,
          value: 9656,
          color: "#F7931A",
          dataKey: "btc",
        },
        {
          id: 2,
          name: "ETH",
          icon: eth,
          percent: 27,
          value: 6566,
          color: "#3AB83A",
          dataKey: "eth",
        },
        {
          id: 3,
          name: "BNB",
          icon: bnb,
          percent: 21,
          value: 3656,
          color: "#D80A22",
          dataKey: "bnb",
        },
        {
          id: 4,
          name: "BCH",
          icon: bch,
          percent: 17,
          value: 1656,
          color: "#6417B1",
          dataKey: "bch",
        },
        {
          id: 5,
          name: "LTC",
          icon: ltc,
          percent: 0,
          value: 0,
          color: "#A3A3A3",
          dataKey: "ltc",
        },
        {
          id: 6,
          name: "XTZ",
          icon: xtz,
          percent: 0,
          value: 0,
          color: "#E0BC00",
          dataKey: "xtz",
        },
        {
          id: 7,
          name: "EOS",
          icon: eos,
          percent: 35,
          value: 9656,
          color: "#B134DD",
          dataKey: "eos",
        },
        {
          id: 8,
          name: "XRP",
          icon: xrp,
          percent: 0,
          value: 0,
          color: "#1276A7",
          dataKey: "xrp",
        },
      ],
    },
    operationData: [
      {
        type: "expenses",
        id: 1,
        category: "Транспорт",
        cash: 9.56,
        currency: "USD",
        color: "#2F69FF",
        percent: 10,
        disable: false,
        childExpensesStatistics: [
          {
            id: 1,
            parentCategory: "Транспорт",
            category: "Яндекс",
            cash: 9.56,
            currency: "USD",
            color: "#4A6CBF",
            percent: 35,
            disable: false,
          },
          {
            id: 2,
            parentCategory: "Транспорт",
            category: "Uber",
            cash: 9.56,
            currency: "USD",
            color: "#0F3AA6",
            percent: 40,
            disable: false,
          },
          {
            id: 3,
            parentCategory: "Транспорт",
            category: "Ситимобил",
            cash: 9.56,
            currency: "USD",
            color: "#6390FF",
            percent: 25,
            disable: false,
          },
        ],
      },
      {
        type: "expenses",
        id: 2,
        category: "Cвязь",
        cash: 4.56,
        currency: "USD",
        color: "#FF612F",
        percent: 5,
        disable: false,
        childExpensesStatistics: [
          {
            id: 1,
            parentCategory: "Связь",
            category: "Мегафон",
            cash: 9.56,
            currency: "USD",
            color: "#FF4D14",
            percent: 35,
            disable: false,
          },
          {
            id: 2,
            parentCategory: "Связь",
            category: "Билайн",
            cash: 9.56,
            currency: "USD",
            color: "#BF5B3B",
            percent: 40,
            disable: false,
          },
          {
            id: 3,
            parentCategory: "Связь",
            category: "Теле2",
            cash: 9.56,
            currency: "USD",
            color: "#A62D07",
            percent: 25,
            disable: false,
          },
        ],
      },
      {
        type: "expenses",
        id: 3,
        category: "Супермаркеты",
        cash: 6.56,
        currency: "USD",
        color: "#BC2FFF",
        percent: 8,
        disable: false,
        childExpensesStatistics: [
          {
            id: 1,
            parentCategory: "Супермаркеты",
            category: "Магнит",
            cash: 9.56,
            currency: "USD",
            color: "#9A4ABF",
            percent: 35,
            disable: false,
          },
          {
            id: 2,
            parentCategory: "Супермаркеты",
            category: "Лента",
            cash: 9.56,
            currency: "USD",
            color: "#760FA6",
            percent: 40,
            disable: false,
          },
          {
            id: 3,
            parentCategory: "Супермаркеты",
            category: "Метро",
            cash: 9.56,
            currency: "USD",
            color: "#CD63FF",
            percent: 25,
            disable: false,
          },
        ],
      },
      {
        type: "expenses",
        id: 4,
        category: "Переводы",
        cash: 5.56,
        currency: "USD",
        color: "#FF40D5",
        percent: 5,
        disable: false,
        childExpensesStatistics: [
          {
            id: 1,
            parentCategory: "Перевод",
            category: "Tinkoff",
            cash: 9.56,
            currency: "USD",
            color: "#BF54A8",
            percent: 35,
            disable: false,
          },
          {
            id: 2,
            parentCategory: "Перевод",
            category: "Сбербанк",
            cash: 9.56,
            currency: "USD",
            color: "#A61586",
            percent: 40,
            disable: false,
          },
          {
            id: 3,
            parentCategory: "Перевод",
            category: "ВТБ",
            cash: 9.56,
            currency: "USD",
            color: "#FF96E8",
            percent: 25,
            disable: false,
          },
        ],
      },
      {
        type: "expenses",
        id: 5,
        category: "Остальное",
        cash: 12.56,
        currency: "USD",
        color: "#FF4949",
        percent: 12,
        disable: false,
        childExpensesStatistics: [],
      },
      {
        type: "add",
        id: 1,
        category: "Внесение через банкомат",
        cash: 9.56,
        currency: "USD",
        color: "#4A6CBF",
        percent: 35,
        disable: false,
      },
    ],
    chartTextData: {
      category: "Расходы",
      cash: "100",
      percent: "100%",
    },
  },
  cryppo: {
    history: {
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
          cash: -1.234,
          bankCardData: {
            id: 1,
            number: 5678,
            logo: masterCard,
            color: "#2F69FF",
          },
          status: statusPay.status.access,
        },
        {
          id: 5,
          type: "Транспорт",
          icon: yandex,
          title: "Яндекс Такси 4",
          check: "kdgка67lvkdlfdboTGFsodokfNFT",
          data: "3 марта, 16:35",
          iconPay: eth,
          currencyPay: "ETH",
          firm: "Яндекс",
          cash: -1.234,
          bankCardData: {
            id: 1,
            number: 5678,
            logo: masterCard,
            color: "#2F69FF",
          },
          status: statusPay.status.access,
        },
        {
          id: 6,
          type: "Транспорт",
          icon: yandex,
          title: "Яндекс Такси 4",
          check: "kdgка67lvkdlfdboTGFsodokfNFT",
          data: "3 марта, 16:35",
          iconPay: eth,
          currencyPay: "ETH",
          firm: "Яндекс",
          cash: -1.234,
          bankCardData: {
            id: 1,
            number: 5678,
            logo: masterCard,
            color: "#2F69FF",
          },
          status: statusPay.status.access,
        },
        {
          id: 7,
          type: "Транспорт",
          icon: yandex,
          title: "Яндекс Такси 4",
          check: "kdgка67lvkdlfdboTGFsodokfNFT",
          data: "3 марта, 16:35",
          iconPay: eth,
          currencyPay: "ETH",
          firm: "Яндекс",
          cash: -1.234,
          bankCardData: {
            id: 1,
            number: 5678,
            logo: masterCard,
            color: "#2F69FF",
          },
          status: statusPay.status.access,
        },
        {
          id: 8,
          type: "Транспорт",
          icon: yandex,
          title: "Яндекс Такси 4",
          check: "kdgка67lvkdlfdboTGFsodokfNFT",
          data: "3 марта, 16:35",
          iconPay: eth,
          currencyPay: "ETH",
          firm: "Яндекс",
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
    barData: {
      activeIndex: 0,
      compositions: [
        {
          id: 1,
          name: "BTC",
          icon: btc,
          percent: 35,
          value: 9656,
          color: "#F7931A",
          dataKey: "btc",
        },
        {
          id: 2,
          name: "ETH",
          icon: eth,
          percent: 27,
          value: 6566,
          color: "#3AB83A",
          dataKey: "eth",
        },
        {
          id: 3,
          name: "BNB",
          icon: bnb,
          percent: 21,
          value: 3656,
          color: "#D80A22",
          dataKey: "bnb",
        },
        {
          id: 4,
          name: "BCH",
          icon: bch,
          percent: 17,
          value: 1656,
          color: "#6417B1",
          dataKey: "bch",
        },
        {
          id: 5,
          name: "LTC",
          icon: ltc,
          percent: 0,
          value: 0,
          color: "#A3A3A3",
          dataKey: "ltc",
        },
        {
          id: 6,
          name: "XTZ",
          icon: xtz,
          percent: 0,
          value: 0,
          color: "#E0BC00",
          dataKey: "xtz",
        },
        {
          id: 7,
          name: "EOS",
          icon: eos,
          percent: 35,
          value: 9656,
          color: "#B134DD",
          dataKey: "eos",
        },
        {
          id: 8,
          name: "XRP",
          icon: xrp,
          percent: 0,
          value: 0,
          color: "#1276A7",
          dataKey: "xrp",
        },
      ],
    },
    operationData: [
      {
        type: "expenses",
        id: 1,
        category: "Транспорт",
        cash: 9.56,
        currency: "USD",
        color: "#2F69FF",
        percent: 10,
        disable: false,
        childExpensesStatistics: [
          {
            id: 1,
            parentCategory: "Транспорт",
            category: "Яндекс",
            cash: 9.56,
            currency: "USD",
            color: "#4A6CBF",
            percent: 35,
            disable: false,
          },
          {
            id: 2,
            parentCategory: "Транспорт",
            category: "Uber",
            cash: 9.56,
            currency: "USD",
            color: "#0F3AA6",
            percent: 40,
            disable: false,
          },
          {
            id: 3,
            parentCategory: "Транспорт",
            category: "Ситимобил",
            cash: 9.56,
            currency: "USD",
            color: "#6390FF",
            percent: 25,
            disable: false,
          },
        ],
      },
      {
        type: "expenses",
        id: 2,
        category: "Cвязь",
        cash: 4.56,
        currency: "USD",
        color: "#FF612F",
        percent: 5,
        disable: false,
        childExpensesStatistics: [
          {
            id: 1,
            parentCategory: "Связь",
            category: "Мегафон",
            cash: 9.56,
            currency: "USD",
            color: "#FF4D14",
            percent: 35,
            disable: false,
          },
          {
            id: 2,
            parentCategory: "Связь",
            category: "Билайн",
            cash: 9.56,
            currency: "USD",
            color: "#BF5B3B",
            percent: 40,
            disable: false,
          },
          {
            id: 3,
            parentCategory: "Связь",
            category: "Теле2",
            cash: 9.56,
            currency: "USD",
            color: "#A62D07",
            percent: 25,
            disable: false,
          },
        ],
      },
      {
        type: "expenses",
        id: 3,
        category: "Супермаркеты",
        cash: 6.56,
        currency: "USD",
        color: "#BC2FFF",
        percent: 8,
        disable: false,
        childExpensesStatistics: [
          {
            id: 1,
            parentCategory: "Супермаркеты",
            category: "Магнит",
            cash: 9.56,
            currency: "USD",
            color: "#9A4ABF",
            percent: 35,
            disable: false,
          },
          {
            id: 2,
            parentCategory: "Супермаркеты",
            category: "Лента",
            cash: 9.56,
            currency: "USD",
            color: "#760FA6",
            percent: 40,
            disable: false,
          },
          {
            id: 3,
            parentCategory: "Супермаркеты",
            category: "Метро",
            cash: 9.56,
            currency: "USD",
            color: "#CD63FF",
            percent: 25,
            disable: false,
          },
        ],
      },
      {
        type: "expenses",
        id: 4,
        category: "Переводы",
        cash: 5.56,
        currency: "USD",
        color: "#FF40D5",
        percent: 5,
        disable: false,
        childExpensesStatistics: [
          {
            id: 1,
            parentCategory: "Перевод",
            category: "Tinkoff",
            cash: 9.56,
            currency: "USD",
            color: "#BF54A8",
            percent: 35,
            disable: false,
          },
          {
            id: 2,
            parentCategory: "Перевод",
            category: "Сбербанк",
            cash: 9.56,
            currency: "USD",
            color: "#A61586",
            percent: 40,
            disable: false,
          },
          {
            id: 3,
            parentCategory: "Перевод",
            category: "ВТБ",
            cash: 9.56,
            currency: "USD",
            color: "#FF96E8",
            percent: 25,
            disable: false,
          },
        ],
      },
      {
        type: "expenses",
        id: 5,
        category: "Остальное",
        cash: 12.56,
        currency: "USD",
        color: "#FF4949",
        percent: 12,
        disable: false,
        childExpensesStatistics: [],
      },
      {
        type: "add",
        id: 1,
        category: "Внесение через банкомат",
        cash: 9.56,
        currency: "USD",
        color: "#4A6CBF",
        percent: 35,
        disable: false,
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
    chartTextData: {
      category: "Расходы",
      cash: "100",
      percent: "100%",
    },
    isHover: false,
  },
  templateExpensesStatisticData: [],
  templateArrivalStatisticData: [],
};
const operationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_VALUTE:
      const filterValute = (element, index, array) => {
        return element.id == action.value;
      };
      const currency = state.cashOption.find(filterValute);
      CURRENCY = currency;
      const operation = initialState.operationData.operation.filter((item) => {
        if (QUERY && DATERANGE) {
          return (
            item.check.includes(action.value) &&
            item.currencyPay === CURRENCY.value &&
            new Date(item.data).valueOf() <= new Date(DATERANGE[1]).valueOf() &&
            new Date(item.data).valueOf() >= new Date(DATERANGE[0]).valueOf()
          );
        } else {
          if (QUERY) {
            return (
              item.check.includes(action.value) &&
              item.currencyPay === CURRENCY.value
            );
          }
          if (DATERANGE) {
            return (
              item.currencyPay === CURRENCY.value &&
              new Date(item.data).valueOf() <=
                new Date(DATERANGE[1]).valueOf() &&
              new Date(item.data).valueOf() >= new Date(DATERANGE[0]).valueOf()
            );
          }
        }
        return item.currencyPay === currency.value;
      });

      return {
        ...state,
        operationData: {
          title: state.operationData.title,
          operation: operation,
        },
      };
    case DELETE_ITEM:
      return {
        ...state,
        connectOption: state.connectOption.filter((e) => e.id !== action.value),
      };
    case FILTER_WALLET:
      if (action.value === "" || action.value === false) {
        QUERY = null;
        return {
          ...state,
          operationData: {
            title: state.operationData.title,
            operation: initialState.operationData.operation,
          },
        };
      }

      QUERY = action.value;
      return {
        ...state,
        operationData: {
          title: state.operationData.title,
          operation: initialState.operationData.operation.filter((item) => {
            if (CURRENCY && DATERANGE) {
              return (
                item.check.includes(action.value) &&
                item.currencyPay === CURRENCY.value &&
                new Date(item.data).valueOf() <=
                  new Date(DATERANGE[1]).valueOf() &&
                new Date(item.data).valueOf() >=
                  new Date(DATERANGE[0]).valueOf()
              );
            } else {
              if (CURRENCY) {
                return (
                  item.check.includes(action.value) &&
                  item.currencyPay === CURRENCY.value
                );
              }
              if (DATERANGE) {
                return (
                  item.check.includes(action.value) &&
                  new Date(item.data).valueOf() <=
                    new Date(DATERANGE[1]).valueOf() &&
                  new Date(item.data).valueOf() >=
                    new Date(DATERANGE[0]).valueOf()
                );
              }
            }
            return item.check.includes(action.value);
          }),
        },
      };
    case FILTER_DATE:
      if (action.value[0] === "" || action.value[1] === "") {
        DATERANGE = null;
        return {
          ...state,
          operationData: {
            title: state.operationData.title,
            operation: initialState.operationData.operation,
          },
        };
      }

      DATERANGE = action.value;
      return {
        ...state,
        operationData: {
          title: state.operationData.title,
          operation: initialState.operationData.operation.filter((item) => {
            if (CURRENCY && QUERY) {
              return (
                new Date(item.data).valueOf() <=
                  new Date(action.value[1]).valueOf() &&
                new Date(item.data).valueOf() >=
                  new Date(action.value[0]).valueOf() &&
                item.currencyPay === CURRENCY.value &&
                item.check.includes(QUERY)
              );
            } else {
              if (CURRENCY) {
                return (
                  new Date(item.data).valueOf() <=
                    new Date(action.value[1]).valueOf() &&
                  new Date(item.data).valueOf() >=
                    new Date(action.value[0]).valueOf() &&
                  item.currencyPay === CURRENCY.value
                );
              }
              if (QUERY) {
                return (
                  new Date(item.data).valueOf() <=
                    new Date(action.value[1]).valueOf() &&
                  new Date(item.data).valueOf() >=
                    new Date(action.value[0]).valueOf() &&
                  item.check.includes(QUERY)
                );
              }
            }
            return (
              new Date(item.data).valueOf() <=
                new Date(action.value[1]).valueOf() &&
              new Date(item.data).valueOf() >=
                new Date(action.value[0]).valueOf()
            );
          }),
        },
      };
    case FILTER_OPERATIONS:
      return {
        ...state,
        expensesStatisticData: action.value.currency,
      };
    case CHANGE_ACTIVE_INDEX:
      return {
        ...state,
        compositionData: {
          activeIndex: action.value,
          compositions: state.compositionData.compositions,
        },
      };
    case UPDATE_CHART:
      return {
        ...state,
        templateExpensesStatisticData: action.child,
        operationsFilter: {
          type: "Tags",
          searchQuery: "",
          tags: [],
        },
      };
    case INPUT_CHANGE:
      return {
        ...state,
        operationsFilter: {
          // type: state.operationsFilter.type,
          searchQuery: action.value,
          tags: [...state.operationsFilter.tags],
        },
      };
    default:
      return state;
  }
};

export const disableItem = (value) => ({ type: DISABLE_ITEM, value });
export const inputChange = (value) => ({ type: INPUT_CHANGE, value });
export const filterDate = (value) => ({ type: FILTER_DATE, value });
export const updateChart = (child) => ({ type: UPDATE_CHART, child });
export const changeActiveIndex = (value) => ({
  type: CHANGE_ACTIVE_INDEX,
  value,
});
export const filterValute = (value) => ({ type: FILTER_VALUTE, value });
export const filterWallet = (value) => ({ type: FILTER_WALLET, value });
export const deleteAddress = (value) => ({ type: DELETE_ITEM, value });
export default operationReducer;
