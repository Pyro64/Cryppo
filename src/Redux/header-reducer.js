

import businessSvg from '../Images/cryppo-business.svg'
import cryppoSvg from '../Images/cryppo.svg'
const BUSSINESS_PAGE = 'BUSSINESS_PAGE';
const LOCATION = 'LOCATION';
let initialState = {
    headerData: {
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
        logo: cryppoSvg,
    },
    location: '/'
};
const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUSSINESS_PAGE:
            return {
                ...state = {
                    btn: [
                        {
                            id: 1,
                            name: 'Кому подойдет',
                        },
                    ],
                    logo: businessSvg,
                }

            };
        case LOCATION:
            return {
                location: action.value
            };
        default:
            return state;
    }
}
export const bussiness = () => ({ type: BUSSINESS_PAGE })
export const location = (value) => ({ type: LOCATION, value })
export default headerReducer;