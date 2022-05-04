import gipo from "../Images/icon/gipo.svg";
import calculate from "../Images/news/1.svg";
import analitica from "../Images/news/2.svg";
import cryptocard from "../Images/news/3.svg";
import cryptocard2 from "../Images/news/4.svg";
import Benefist1 from '../Images/icon/Benefist1.svg'
import Benefist2 from '../Images/icon/Benefist2.svg'
import Benefist3 from '../Images/icon/Benefist3.svg'
import Benefist4 from '../Images/icon/Benefist4.svg'
import banner from '../Images/content/banner-index.svg'

const SET_CHART_TEXT = "SET_CHART_TEXT";
const INIT_CHART_TEXT = "INIT_CHART_TEXT";

let initialState = {
     bannerData: {
        title: 'CRYPPO Invest',
        gradient: '.',
        text: 'Автоматически ребалансируемый индекс из 8 самых высококапитализированных цифровых активов на основе машинного обучения (искусственного интеллекта)',
        img: banner,
    },
    benefitsData: [
        {
            id: 1,
            icon: Benefist1,
            text: "Ваши инвестиции на личном кошельке инвестора внутри блокчейна CRYPPO INDEX",

        },
        {
            id: 2,
            icon: Benefist2,
            text: "Абсолютная прозрачность всех инвестиционных транзакций",

        },
        {
            id: 3,
            icon: Benefist3,
            text: "Отсутствие спекуляций и манипуляций курсом индекса: после вывода средств токены инвестора уничтожаются",

        },
        {
            id: 4,
            icon: Benefist4,
            text: "Свободный вывод средств по истечении рекомендованного периода",

        },


    ],
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
}
const interfaceReducer = (state = initialState, action) => {
    switch (action.type) {
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
            return {...state};    
    }
}
export const initChartText = () => ({ type: INIT_CHART_TEXT });
export const setChartText = (value) => ({ type: SET_CHART_TEXT, value });
export default interfaceReducer;