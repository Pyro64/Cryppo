import cryppoSvg from "../Images/cryppo.svg";
import annaBobs from "../Images/login/anna_bobs.svg";
const LOGIN_CRYPPO = "LOGIN_CRYPPO";
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
    default:
      return state;
  }
};
export const login = (value) => ({ type: LOGIN_CRYPPO, value });
export default cryppoReducer;
