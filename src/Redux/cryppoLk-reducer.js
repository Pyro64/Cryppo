import usd from "../Images/payIcon/12.svg";
import icx from "../Images/payIcon/6.svg";
import arde from "../Images/payIcon/arde.svg";
import eth from "../Images/payIcon/eth.svg";
import masterCard from "../Images/icon/mastercard.svg";
import bag from "../Images/icon/bag.svg";
import qron from "../Images/icon/qron.svg";
import elementum from "../Images/icon/elementum.svg";
import calculate from "../Images/icon/calculate.svg";
import diagram from "../Images/icon/diagram.svg";
import card from "../Images/icon/card.svg";
import visa from "../Images/icon/VISA.svg";
import yandex from "../Images/icon/yandex.svg";
import gipo from "../Images/icon/gipo.svg";
import arrow from "../Images/icon/arrow.svg";

let initialState = {
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
  tabsData: [
    {
      id: 1,
      icon: calculate,
      text: "Ваши траты за месяц",
    },
    {
      id: 2,
      icon: diagram,
      text: "Аналитика",
    },
    {
      id: 3,
      icon: card,
      text: "Криптокарта",
    },
    {
      id: 4,
      icon: card,
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
        title: "Яндекс Такси",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        status: false,
        cash: -1.234,
      },
      {
        id: 2,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        status: true,
        cash: -1.234,
      },
      {
        id: 3,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        status: false,
        cash: -1.234,
      },
      {
        id: 4,
        type: "Транспорт",
        icon: yandex,
        title: "Яндекс Такси",
        check: "kdgка67lvkdlfdboTGFsodokfNFT",
        status: false,
        cash: -1.234,
      },
    ],
  },
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
};

const cryppoLkReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default cryppoLkReducer;
