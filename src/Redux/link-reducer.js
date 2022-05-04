import indexSvg from '../Images/cryppo-index.svg'

let initialState = {
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
}

const linkReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {...state};
    }
}
export default linkReducer;