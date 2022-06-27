import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tempExpenses: [],
    tempArrival: [],
    expenses: [
        {
            id: 1,
            category: "Транспорт",
            cash: 9.56,
            currency: "USD",
            color: "#2F69FF",
            percent: 10,
            disable: false,
            childExpensesStatistics: [
                {
                    id: 1,
                    parentCategory: "Транспорт",
                    category: "Яндекс",
                    cash: 9.56,
                    currency: "USD",
                    color: "#4A6CBF",
                    percent: 35,
                    disable: false,
                },
                {
                    id: 2,
                    parentCategory: "Транспорт",
                    category: "Uber",
                    cash: 9.56,
                    currency: "USD",
                    color: "#0F3AA6",
                    percent: 40,
                    disable: false,
                },
                {
                    id: 3,
                    parentCategory: "Транспорт",
                    category: "Ситимобил",
                    cash: 9.56,
                    currency: "USD",
                    color: "#6390FF",
                    percent: 25,
                    disable: false,
                },
            ],
        },
        {
            id: 2,
            category: "Cвязь",
            cash: 4.56,
            currency: "USD",
            color: "#FF612F",
            percent: 5,
            disable: false,
            childExpensesStatistics: [
                {
                    id: 1,
                    parentCategory: "Связь",
                    category: "Мегафон",
                    cash: 9.56,
                    currency: "USD",
                    color: "#FF4D14",
                    percent: 35,
                    disable: false,
                },
                {
                    id: 2,
                    parentCategory: "Связь",
                    category: "Билайн",
                    cash: 9.56,
                    currency: "USD",
                    color: "#BF5B3B",
                    percent: 40,
                    disable: false,
                },
                {
                    id: 3,
                    parentCategory: "Связь",
                    category: "Теле2",
                    cash: 9.56,
                    currency: "USD",
                    color: "#A62D07",
                    percent: 25,
                    disable: false,
                },
            ],
        },
        {
            id: 3,
            category: "Супермаркеты",
            cash: 6.56,
            currency: "USD",
            color: "#BC2FFF",
            percent: 8,
            disable: false,
            childExpensesStatistics: [
                {
                    id: 1,
                    parentCategory: "Супермаркеты",
                    category: "Магнит",
                    cash: 9.56,
                    currency: "USD",
                    color: "#9A4ABF",
                    percent: 35,
                    disable: false,
                },
                {
                    id: 2,
                    parentCategory: "Супермаркеты",
                    category: "Лента",
                    cash: 9.56,
                    currency: "USD",
                    color: "#760FA6",
                    percent: 40,
                    disable: false,
                },
                {
                    id: 3,
                    parentCategory: "Супермаркеты",
                    category: "Метро",
                    cash: 9.56,
                    currency: "USD",
                    color: "#CD63FF",
                    percent: 25,
                    disable: false,
                },
            ],
        },
        {
            id: 4,
            category: "Переводы",
            cash: 5.56,
            currency: "USD",
            color: "#FF40D5",
            percent: 5,
            disable: false,
            childExpensesStatistics: [
                {
                    id: 1,
                    parentCategory: "Перевод",
                    category: "Tinkoff",
                    cash: 9.56,
                    currency: "USD",
                    color: "#BF54A8",
                    percent: 35,
                    disable: false,
                },
                {
                    id: 2,
                    parentCategory: "Перевод",
                    category: "Сбербанк",
                    cash: 9.56,
                    currency: "USD",
                    color: "#A61586",
                    percent: 40,
                    disable: false,
                },
                {
                    id: 3,
                    parentCategory: "Перевод",
                    category: "ВТБ",
                    cash: 9.56,
                    currency: "USD",
                    color: "#FF96E8",
                    percent: 25,
                    disable: false,
                },
            ],
        },
        {
            id: 5,
            category: "Остальное",
            cash: 12.56,
            currency: "USD",
            color: "#FF4949",
            percent: 12,
            disable: false,
            childExpensesStatistics: [],
        },
    ],
    arrival: [
        {
            id: 1,
            category: "Внесение через банкомат",
            cash: 9.56,
            currency: "USD",
            color: "#2F69FF",
            percent: 10,
            disable: false,
            childExpensesStatistics: [],
        },
        {
            id: 2,
            category: "Перевод",
            cash: 4.56,
            currency: "USD",
            color: "#FF612F",
            percent: 5,
            disable: false,
            childExpensesStatistics: [],
        },
        {
            id: 3,
            category: "Зарплата",
            cash: 6.56,
            currency: "USD",
            color: "#BC2FFF",
            percent: 8,
            disable: false,
            childExpensesStatistics: [],
        },
    ],
    doughuntTextData: {
        category: "Расходы",
        cash: "100",
        percent: "100%",
    },
    isHover: false,
    defaultSearch: [],
};
export const doughuntSlice = createSlice({
    name: "doughunt",
    initialState,
    reducers: {
        NestedCategory(state, action) {
            state.tempExpenses = action.payload;
        },
        SetChartText(state, action) {
            state.doughuntTextData.category = action.payload.category;
            state.doughuntTextData.cash = action.payload.cash;
            state.doughuntTextData.percent = action.payload.percent;
            state.isHover = true;
        },
        InitChartText(state) {
            state.doughuntTextData.category = "Расходы";
            state.doughuntTextData.cash = "100";
            state.doughuntTextData.percent = "100";
            state.isHover = false;
        },
        DisableItem(state, action) {
            if (action.payload.operationType === "expenses") {
                state.expenses.forEach((item) => {
                    if (item.id === action.payload.id) {
                        item.disable = !item.disable;
                    }
                });
                state.tempExpenses.forEach((item) => {
                    if (item.id === action.payload.id) {
                        item.disable = !item.disable;
                    }
                });
            } else {
                state.arrival.forEach((item) => {
                    if (item.id === action.payload.id) {
                        item.disable = !item.disable;
                    }
                });
                state.tempArrival.forEach((item) => {
                    if (item.id === action.payload.id) {
                        item.disable = !item.disable;
                    }
                });
            }
        },
        UpdateChart(state, action) {
            state.tempExpenses = action.payload;
        },
        FilterChart(state, action) {
            state.arrival.forEach((item) => {
                item.cash = Math.round(Math.random() * 1000) / 10;
                item.percent = Math.round(Math.random() * 10) / 10;
            });
            state.expenses.forEach((item) => {
                item.cash = Math.round(Math.random() * 1000) / 10;
                item.percent = Math.round(Math.random() * 10) / 10;
            });
            state.tempArrival.forEach((item) => {
                item.cash = Math.round(Math.random() * 1000) / 10;
                item.percent = Math.round(Math.random() * 10) / 10;
            });
            state.tempExpenses.forEach((item) => {
                item.cash = Math.round(Math.random() * 1000) / 10;
                item.percent = Math.round(Math.random() * 10) / 10;
            });
        },
        EditDefaultSearch(state, action) {
            state.defaultSearch.push(action.payload);
        },
        GetCategories(state, action) {
            return state;
        },
    },
});

export default doughuntSlice.reducer;
