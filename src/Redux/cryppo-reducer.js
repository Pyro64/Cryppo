import cryppoSvg from '../Images/cryppo.svg'
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
}
const cryppoReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default cryppoReducer;