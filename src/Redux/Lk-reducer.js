import bag from "../Images/icon/bag.svg";
import qron from "../Images/icon/qron.svg";
import elementum from "../Images/icon/elementum.svg";
import index from "../Images/icon/index.svg";
import profit from "../Images/icon/profit.svg";
import plus from "../Images/icon/plus.svg";
import calculate from "../Images/news/1.svg";
import analitica from "../Images/news/2.svg";
import cryptocard from "../Images/news/3.svg";
import cryptocard2 from "../Images/news/4.svg";
import gipo from "../Images/icon/gipo.svg";
import one from "../Images/payIcon/1.svg";
import two from "../Images/payIcon/2.svg";
import three from "../Images/payIcon/3.svg";
import four from "../Images/payIcon/4.svg";
import five from "../Images/payIcon/5.svg";
import six from "../Images/payIcon/6.svg";
import rus from "../Images/counry/russia.png";
import ukr from "../Images/counry/ukraine.png";
import kaz from "../Images/counry/kazakhstan.png";
const SET_MODAL = "SET_MODAL";
const SWITCH_MODAL = "SWITCH_MODAL";
const SET_CHART_TEXT = "SET_CHART_TEXT";
const INIT_CHART_TEXT = "INIT_CHART_TEXT";
const REMOVE_ALERT = "REMOVE_ALERT";
let initialState = {
  business: {
    alertData: [
      {
        id: 1,
        message: "Вывод прошел успешно",
        description: "Вывод средств с криптокошелька на карту прошел успешно",
        type: "success",
      },
      {
        id: 2,
        message: "Внимание",
        description:
          "Настоятельно рекомендуем подключить двухфакторную аунтификацию",
        type: "info",
      },
      {
        id: 3,
        message: "Опасность",
        description: "Выполнен вход с чужого аккаунта",
        type: "warning",
      },
    ],
    currencyList: [
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
    isModal: false,
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
  },
  cryppo: {
    alertData: [
      {
        id: 1,
        message: "Вывод прошел успешно",
        description: "Вывод средств с криптокошелька на карту прошел успешно",
        type: "success",
      },
      {
        id: 2,
        message: "Внимание",
        description:
          "Настоятельно рекомендуем подключить двухфакторную аунтификацию",
        type: "info",
      },
      {
        id: 3,
        message: "Опасность",
        description: "Выполнен вход с чужого аккаунта",
        type: "warning",
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
    cardData: {
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
      addTerminal: {
        id: 1,
        icon: plus,
        title: "Привязать терминал",
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
    isHover: false,
  },
};
const LkReducer = (state = initialState, action) => {
  switch (action.type) {
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

    case REMOVE_ALERT:
      return {
        ...state,
        alertData: state.alertData.filter((e) => e.id !== action.value),
      };
    default:
      return state;
  }
};
export const removeAlert = (value) => ({ type: REMOVE_ALERT, value });

export const switchModal = (isModal) => ({ type: SWITCH_MODAL, isModal });
export const setModal = (value) => ({ type: SET_MODAL, value });
export default LkReducer;
