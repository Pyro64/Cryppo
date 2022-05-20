import cryppoSvg from "../Images/cryppo.svg";
import {CryppoGet} from "../Api/api"


const GET = 'GET';
const LOGIN_CRYPPO = 'LOGIN_CRYPPO';
const EMAIL = "cryppo@cryppo.com";
const PASSWORD = "cryppo333";

let initialState = {
    route: {
        logo: cryppoSvg,
        btn: [
            {
                id: 1,
                name: "Кому подойдет",
                to: "about",
            },
        ],
    },
    isLogin: true,
    navData: [
        {
            id: 1,
            name: "Главная",
            href: 'cryppo/lk'
        },
        {
            id: 2,
            name: "События",
            href: 'cryppo/lk/event'
        },
        {
            id: 3,
            name: "Переводы",
            href: 'cryppo/lk/translations'
        },
        {
            id: 5,
            name: "Настройки",
            href: 'cryppo/lk/settings'
        },
        {
            id: 4,
            name: "Инвестиции",
            href: 'cryppo/lk/invest'
        },
        
    ],
    router: '/cryppo'

};
const cryppoReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET:
            return {
                ...state,
                ...action.value
            };
        case LOGIN_CRYPPO:
            return {
                ...state,
                isLogin: action.value,
            };
        default:
            return state;
    }
};
export const getCryppoThunkCreator = () => {
    return (dispatch) => {
        CryppoGet()
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data))
                dispatch({type: 'GET', value});
            })
            .catch((response) => {
                console.log(response);
                console.log('error');
            })
    }
}

export const get = (value) => ({type: GET, value});
export const login = (value) => ({type: LOGIN_CRYPPO, value})
export const loginThunkCreator = (email, password, value) => {
    return (dispatch) => {
      if(email === EMAIL && password === PASSWORD){
        dispatch({ type: LOGIN_CRYPPO, value });
      }
    };
  };
export default cryppoReducer;
