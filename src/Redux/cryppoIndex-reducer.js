import Benefist1 from '../Images/icon/Benefist1.svg'
import Benefist2 from '../Images/icon/Benefist2.svg'
import Benefist3 from '../Images/icon/Benefist3.svg'
import Benefist4 from '../Images/icon/Benefist4.svg'
import indexSvg from '../Images/cryppo-index.svg'
import one from '../Images/payIcon/1.svg'
import two from '../Images/payIcon/2.svg'
import three from '../Images/payIcon/3.svg'
import banner from '../Images/content/banner-index.svg'
import annaBobs from '../Images/login/anna_bobs.svg'
import {CryppoIndexGet} from "../Api/api"

const GET = 'GET'
const LOGIN_INDEX = 'LOGIN_INDEX';
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
    aboutData: {
        Index: {
            id: 1,
            text: '$45.78',
            title: 'Index'
        },
        CoinItem: [
            {
                id: 1,
                img: one,
                title: "ICX",
                number: 78.444,
            },
            {
                id: 2,
                img: three,
                title: "ETH",
                number: 1.347,
            },
            {
                id: 3,
                img: two,
                title: "ARDE",
                number: 18.769,
            },
        ],
        Bar: [
            {
                id: 1,
                value: "50%"
            },
            {
                id: 2,
                value: "15%"
            },
        ]
    },
    suggestionsData: [
        {
            id: 1,
            number: '390',
            text: 'ДНЕЙ ТЕСТОВОЙ РАБОТЫ',
        },
        {
            id: 2,
            number: '1574',
            text: 'ИНВЕСТИЦИОННЫЕ ОПЕРАЦИИ',
        },
        {
            id: 3,
            number: '38%',
            text: 'ПРИБЫЛИ USDT',
        },
    ],
    route: {
        logo: indexSvg,
        btn: [
            {
                id: 2,
                name: 'Преимущества',
                to: 'benefitsIndex'
            },
        ],
    },
    userData:
    {
        id: 1,
        img: annaBobs,
        name: "Index Bobs",
    },
    navData: [
        {
            id: 1,
            name: "Главная",
            href: '/'
        },
        {
            id: 2,
            name: "События",
            href: '/event'
        },
        {
            id: 3,
            name: "Переводы",
            href: '/translations'
        },
        {
            id: 4,
            name: "Настройки",
            href: '/settings'
        },
    ],
    isLogin: false,
}
const cryppoIndexReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_INDEX:
            return {
                ...state,
                isLogin: action.value,
            };
        case GET:
            return {
                ...state,
                isLogin: action.value,
            };
        default:
            return state;
    }
}

export const getCryppoIndexThunkCreator = () =>{
    return (dispatch) => {
        CryppoIndexGet()
          .then((data)=>{
            let value = JSON.parse(JSON.stringify(data))
            dispatch({type: 'GET', value});
          })
          .catch((response) => {
              console.log(response);
              console.log('error');
          })
    }
}
export const login = (value) => ({ type: LOGIN_INDEX, value })
export const get = (value) => ({ type: GET, value })
export default cryppoIndexReducer;