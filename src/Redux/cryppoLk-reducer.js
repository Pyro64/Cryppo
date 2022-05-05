import bag from "../Images/icon/bag.svg";
import qron from "../Images/icon/qron.svg";
import elementum from "../Images/icon/elementum.svg";
import index from "../Images/icon/index.svg";
import profit from "../Images/icon/profit.svg";
import plus from "../Images/icon/plus.svg";
import { CryppoLkGet } from "../Api/api";

const GET = "GET";
const SET_MODAL = "SET_MODAL";
const SWITCH_MODAL = "SWITCH_MODAL";
const ADD_TAG = "ADD_TAG";
const REMOVE_TAG = "REMOVE_TAG";
const INPUT_CHANGE = "INPUT_CHANGE";

let initialState = {

    investData: {
        id: 1,
        title: "Инвестиции CRYPPO INDEX",
        icon: bag,
        crypto: "0.00000000",
        cash: "0.00",
        povered: "Powered by Elementum",
        poveredIcon: elementum,
    },
    newCardData: {
        id: 1,
        title: "Привязать карту",
        povered: "Powered by QRON",
        poveredIcon: qron,
    },
    
    operationModal: {
        id: null,
        type: null,
        icon: null,
        title: null,
        check: null,
        data: null,
        iconPay: null,
        currencyPay: null,
        cash: null,
        firm: null,
        bankCardData: {
            id: null,
            number: null,
            logo: null,
            color: null,
        },
        status: {
            color: null,
            text: null,
        },
    },
    isModal: false,

    tabsData: {
        invest: {
            id: 1,
            icon: bag,
            title: "Инвестиции CRYPPO INVEST",
            statistic: "0.00000000",
            cash: "$ 0.00",
            text: "Powered by Elementum",
            povered: elementum,
        },

        addCart: {
            id: 1,
            icon: plus,
            title: "Привязать карту",
            text: "Powered by QRON",
            povered: qron,
        },

        indexNow: {
            id: 1,
            icon: index,
            title: "Текущая стоимость индекса",
            cash: "$ 28.84",
        },

        volumeIndex: {
            id: 1,
            icon: bag,
            title: "Объем вашего индекса",
            statistic: "0.00000000 TOP8",
            cash: "$ 0.00",
        },

        indexProfit: {
            id: 1,
            icon: profit,
            title: "Индексный доход за сегодня",
            statistic: "$ 0.00",
            text: "0% за последние 30 дней",
        },

        buyNow: {
            id: 1,
            icon: plus,
            title: "Купить индекс",
        },
    },
    operationsFilter:{
        type:"initial",
        searchQuery:"",
        tags:[]
    }
};

const cryppoLkReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET:
            return {
                ...state,
                ...action.value,
            };
        case ADD_TAG:
            return {
                ...state,
                operationsFilter:{
                    type: "Tags",
                    searchQuery: "",
                    tags: [ ...state.operationsFilter.tags, action.tag]
                }
            };
        case INPUT_CHANGE:
                return {
                    ...state,
                    operationsFilter:{
                        type: state.operationsFilter.type,
                        searchQuery: action.value,
                        tags: [...state.operationsFilter.tags]
                    }
                };
        case REMOVE_TAG:
            return {
                ...state,
                operationsFilter:{
                    type: "Tags",
                    searchQuery: "",
                    tags: [ ...state.operationsFilter.tags.filter((item)=> {return item !== action.value})]
                }
            };
        case SET_MODAL:
            return {
                ...state,
                operationModal: action.value,
            };
        case SWITCH_MODAL:
            return {
                ...state,
                isModal: action.isModal,
            };
        
        default:
            return state;
    }
};

export const getCryppoLkThunkCreator = () => {
    return (dispatch) => {
        CryppoLkGet()
            .then((data) => {
                let value = JSON.parse(JSON.stringify(data));
                dispatch({ type: "GET", value });
            })
            .catch((response) => {
                console.log(response);
                console.log("error");
            });
    };
}
export const inputChange = (value) =>({type: INPUT_CHANGE, value});
export const addTag = (tag) => ({ type: ADD_TAG, tag });
export const removeTag = (value) => ({ type: REMOVE_TAG, value });
export const switchModal = (isModal) => ({ type: SWITCH_MODAL, isModal });
export const setModal = (value) => ({ type: SET_MODAL, value });
export const get = (value) => ({ type: GET, value });
export default cryppoLkReducer;
