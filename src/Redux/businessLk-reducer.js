import one from "../Images/payIcon/1.svg";
import two from "../Images/payIcon/2.svg";
import three from "../Images/payIcon/3.svg";
import four from "../Images/payIcon/4.svg";
import five from "../Images/payIcon/5.svg";
import six from "../Images/payIcon/6.svg";
import eth from "../Images/payIcon/eth.svg";
import masterCard from "../Images/icon/mastercard.svg";
import yandex from "../Images/icon/yandex.svg";
import usd from "../Images/payIcon/12.svg";
import icx from "../Images/payIcon/6.svg";
import arde from "../Images/payIcon/arde.svg";
import rus from "../Images/counry/russia.png";
import ukr from "../Images/counry/ukraine.png";
import kaz from "../Images/counry/kazakhstan.png";

const FILTER_VALUTE = "FILTER_VALUTE";
const FILTER_WALLET = "FILTER_WALLET";
const FILTER_DATE = "FILTER_DATE";
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
  historyItem: [
    {
      id: 1,
      date: "17 апреля",
      statusText: "Полученно",
      code: "3JGVRYVJKn6a7wj7sezzcaecHrXaoZiHJT",
      status: "completed",
      cash: "0.22513515 BTC",
    },
    {
      id: 2,
      date: "17 апреля",
      statusText: "Отказ",
      code: "3JGVRYVJKn6a7wj7sezzcaecHrXaoZiHJT",
      status: "error",
      cash: "0.22513515 BTC",
    },
    {
      id: 3,
      date: "17 апреля",
      statusText: "Полученно",
      code: "3JGVRYVJKn6a7wj7sezzcaecHrXaoZiHJT",
      status: "completed",
      cash: "0.22513515 BTC",
    },
    {
      id: 4,
      date: "17 апреля",
      statusText: "Отправленно",
      code: "3JGVRYVJKn6a7wj7sezzcaecHrXaoZiHJT",
      status: "wait",
      cash: "0.22513515 BTC",
    },
  ],
  cashOption: [
    {
      id: 5,
      value: "ETH",
      img: one,
    },
    {
      id: 6,
      value: "Bitcoin1",
      img: two,
    },
    {
      id: 7,
      value: "Bitcoin2",
      img: three,
    },
    {
      id: 8,
      value: "Bitcoin3",
      img: four,
    },
    {
      id: 9,
      value: "Bitcoin4",
      img: five,
    },
    {
      id: 10,
      value: "Bitcoin5",
      img: six,
    },
  ],
  langOption: [
    {
      id: 1,
      flag: rus,
      name: "Русский",
    },
    {
      id: 2,
      flag: ukr,
      name: "Украинский",
    },
    {
      id: 3,
      flag: kaz,
      name: "Казахстанский",
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
        data: "03.03.2022",
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
        data: "03.03.2022",
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
        data: "03.03.2022",
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
        data: "03.03.2022",
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
        title: "Яндекс Такси 1",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 6,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 2",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 7,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 3",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 8,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 4",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 9,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 1",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 10,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 2",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 11,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 3",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 12,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 4",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 13,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 1",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 14,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 2",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 15,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 3",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 16,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 4",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 17,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 1",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 18,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 2",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 19,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 3",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 20,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 4",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 21,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 1",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 22,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 2",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 23,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 3",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 24,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 4",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 25,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 1",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 26,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 2",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 27,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 3",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 28,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 4",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 29,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 1",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 30,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 2",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 31,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 3",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
        id: 32,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси 4",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        data: "03.03.2022",
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
  settingOption: [
    {
      id: 1,
      name: "Системные уведомления",
    },
    {
      id: 2,
      name: "Успешный вход",
    },
    {
      id: 3,
      name: "Неуспешный вход",
    },
    {
      id: 4,
      name: "Отправлен платеж",
    },
    {
      id: 5,
      name: "Получен платеж",
    },
    {
      id: 6,
      name: "Совершен обмен",
    },
    {
      id: 7,
      name: "Изменена двухфакторная авторизация",
    },
    {
      id: 8,
      name: "Изменен пароль",
    },
    {
      id: 9,
      name: "Изменены уведомления",
    },
  ],
  connectOption: [
    {
      id: 1,
      date: "2020-05-07 16:44:33 UTC+03:00",
      ip: "255.255.255.255",
      geo: "Moscow / Russia",
      status: "Successful login",
      device: "OS X",
    },
    {
      id: 2,
      date: "2020-05-07 16:44:33 UTC+03:00",
      ip: "255.255.255.255",
      geo: "Moscow / Russia",
      status: "Successful login",
      device: "OS X",
    },
    {
      id: 3,
      date: "2020-05-07 16:44:33 UTC+03:00",
      ip: "255.255.255.255",
      geo: "Moscow / Russia",
      status: "Successful login",
      device: "OS X",
    },
    {
      id: 4,
      date: "2020-05-07 16:44:33 UTC+03:00",
      ip: "255.255.255.255",
      geo: "Moscow / Russia",
      status: "Successful login",
      device: "OS X",
    },
  ],
  settingData: [
    {
      id: 1,
      icon: one,
      name: "BTC",
      value: true,
    },
    {
      id: 2,
      icon: two,
      name: "ETX",
      value: true,
    },
    {
      id: 3,
      icon: three,
      name: "ICX",
      value: true,
    },
    {
      id: 4,
      icon: four,
      name: "ARDE",
      value: true,
    },
    {
      id: 5,
      icon: two,
      name: "ETH",
      value: true,
    },
    {
      id: 6,
      icon: one,
      name: "ARDE",
      value: true,
    },
    {
      id: 7,
      icon: four,
      name: "BTC",
      value: true,
    },
    {
      id: 8,
      icon: one,
      name: "BTC",
      value: true,
    },
    {
      id: 9,
      icon: five,
      name: "BTC",
      value: true,
    },
    {
      id: 10,
      icon: six,
      name: "BTC",
      value: true,
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
};
const businessLkReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_VALUTE:
      const filter = (element, index, array) => {
        return element.id == action.value;
      };
      const currency = state.cashOption.find(filter);
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
    default:
      return state;
  }
};
export const filterValute = (value) => ({ type: FILTER_VALUTE, value });
export const filterWallet = (value) => ({ type: FILTER_WALLET, value });
export const filterDate = (value) => ({ type: FILTER_DATE, value });
export const deleteAddress = (value) => ({ type: DELETE_ITEM, value });
export default businessLkReducer;
