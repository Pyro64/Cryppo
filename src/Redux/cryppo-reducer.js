import cryppoSvg from '../Images/cryppo.svg'
const LOGIN_CRYPPO = 'LOGIN_CRYPPO';
let initialState = {
    route: {
        logo: cryppoSvg,
        btn: [
        ],
    },
    isLogin: false,
}
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
}
export const login = (value) => ({ type: LOGIN_CRYPPO, value })
export default cryppoReducer;