

import businessSvg from '../Images/cryppo-business.svg'
import indexSvg from '../Images/cryppo-index.svg'
import cryppoSvg from '../Images/cryppo.svg'

const BUSSINESS_PAGE = 'BUSSINESS_PAGE';
const INDEX_PAGE = 'INDEX_PAGE';
const CRYPPO_PAGE = 'CRYPPO_PAGE';
let initialState = {

    logo: cryppoSvg,


};


const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUSSINESS_PAGE:
            return {
                ...state,
                logo: businessSvg

            };
        case INDEX_PAGE:
            return {
                ...state,
                logo: indexSvg

            };
        case CRYPPO_PAGE:
            return {
                ...state,
                logo: cryppoSvg,

            }
        default:
            return state
    }
}
export const bussiness = () => ({ type: BUSSINESS_PAGE })
export const index = () => ({ type: INDEX_PAGE })
export const cryppo = () => ({ type: CRYPPO_PAGE })



export default headerReducer;