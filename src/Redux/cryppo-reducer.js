import cryppoSvg from "../Images/cryppo.svg";
import annaBobs from "../Images/login/anna_bobs.svg";
import {CryppoGet} from "../Api/api"

const LOGIN_CRYPPO = "LOGIN_CRYPPO";
const GET = 'GET';


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
  navData: [
    {
      id: 1,
      name: "Главная",
      href: "/lk",
    },
    {
      id: 2,
      name: "События",
      href: "lk/event",
    },
    {
      id: 3,
      name: "Переводы",
      href: "lk/translations",
    },
    {
      id: 4,
      name: "Инвестиции",
      href: "lk/invest",
    },

    {
      id: 5,
      name: "Настройки",
      href: "lk/settings",
    },
  ],
  userData: {
    id: 1,
    img: annaBobs,
    name: "Cryppo Bobs",
  },
  isLogin: false,
};
const cryppoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_CRYPPO:
      return {
        ...state,
        isLogin: action.value,
      };
    case GET:
          return {
            ...state,
            ...action.value
          };
    default:
      return state;
  }
};
export const getCryppoThunkCreator = () =>{
  return (dispatch) => {
      CryppoGet()
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
export const login = (value) => ({ type: LOGIN_CRYPPO, value });
export const get = (value) => ({ type: GET, value });
export default cryppoReducer;
