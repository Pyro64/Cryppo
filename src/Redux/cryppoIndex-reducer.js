import one from '../Images/payIcon/1.svg'
import two from '../Images/payIcon/2.svg'
import three from '../Images/payIcon/3.svg'

import { CryppoIndexGet } from "../Api/api"

const GET = 'GET'
const LOGIN_INDEX = 'LOGIN_INDEX';
let initialState = {
    aboutDataIndex: {
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
    isLogin:true,
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
            };
        default:
            return state;
    }
}

export const getCryppoIndexThunkCreator = () => {
    return (dispatch) => {
        CryppoIndexGet()
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data))
                dispatch({ type: 'GET', value });
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