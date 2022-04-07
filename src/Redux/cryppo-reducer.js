import cryppoSvg from '../Images/cryppo.svg'
const LOGIN = 'LOGIN';
let initialState = {
    route: {
        logo: cryppoSvg,
        btn: [
            {
                id: 1,
                name: 'Кому подойдет',
            },
            {
                id: 2,
                name: 'Преимущества',
            },
            {
                id: 3,
                name: 'Как подключить',
            },
            {
                id: 4,
                name: 'FAQ',
            },
            {
                id: 5,
                name: 'Мобильное приложение',
            },
        ],
    },
    isLogin: false,
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