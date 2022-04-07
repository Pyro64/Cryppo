import cryppoSvg from '../Images/cryppo.svg'
const LOGIN = 'LOGIN';
let initialState = {
    route: {
        logo: cryppoSvg,
        btn: [
        ],
    },
    isLogin: true,
    url: '/cryppo/lk',
}
const cryppoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogin: action.value,
            };
        default:
            return state;
    }
}
export const login = (value) => ({ type: LOGIN, value })
export default cryppoReducer;