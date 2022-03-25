

import businessSvg from '../Images/cryppo-business.svg'
import indexSvg from '../Images/cryppo-index.svg'
import cryppoSvg from '../Images/cryppo.svg'

const BUSSINESS_PAGE = 'BUSSINESS_PAGE';
const INDEX_PAGE = 'INDEX_PAGE';
const CRYPPO_PAGE = 'CRYPPO_PAGE';
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

};


const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUSSINESS_PAGE:
            return {
                ...state,
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
                            name: 'Мобильные приложение',
                        },
                    ],
                    logo: businessSvg
                }
            };
        case INDEX_PAGE:
            return {
                ...state,
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
                    ],
                    logo: indexSvg
                }
            };
        case CRYPPO_PAGE:
            return {
                ...state,
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
                    ],
                    logo: cryppoSvg,
                }
            }
        default:
            return state
    }
}
export const bussiness = () => ({ type: BUSSINESS_PAGE })
export const index = () => ({ type: INDEX_PAGE })
export const cryppo = () => ({ type: CRYPPO_PAGE })



export default headerReducer;