import annaBobs from "../Images/login/anna_bobs.svg";
const HAS_LK = "HAS_LK";
let initialState = {
  business: {
    id: 1,
    img: annaBobs,
    name: "Business Bobs",
    isLogin: true,
    router: "/business",
    mail: "k.konstantinopolskiy@gmail.com",
  },
  cryppo: {
    isLogin: true,
    router: "/cryppo",
    id: 2,
    img: annaBobs,
    name: "Index Bobs",
    mail: "k.konstantinopolskiy@gmail.com",
  },
  isLk: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case HAS_LK:
      return {
        ...state,
        isLk: action.value,
      };
    default:
      return state;
  }
};
export const hasLk = (value) => ({ type: HAS_LK, value });
export default userReducer;
