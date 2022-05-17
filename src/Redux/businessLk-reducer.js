
let initialState = {
    historyItem: [
        {
            id: 1,
            date: '17 апреля',
            statusText: 'Полученно',
            code: '3JGVRYVJKn6a7wj7sezzcaecHrXaoZiHJT',
            status: 'completed',
            cash: '0.22513515 BTC'
        },
        {
            id: 2,
            date: '17 апреля',
            statusText: 'Отказ',
            code: '3JGVRYVJKn6a7wj7sezzcaecHrXaoZiHJT',
            status: 'error',
            cash: '0.22513515 BTC'
        },
        {
            id: 3,
            date: '17 апреля',
            statusText: 'Полученно',
            code: '3JGVRYVJKn6a7wj7sezzcaecHrXaoZiHJT',
            status: 'completed',
            cash: '0.22513515 BTC'
        },
        {
            id: 4,
            date: '17 апреля',
            statusText: 'Отправленно',
            code: '3JGVRYVJKn6a7wj7sezzcaecHrXaoZiHJT',
            status: 'wait',
            cash: '0.22513515 BTC'
        },
    ],
};
const businessLkReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}



export default businessLkReducer;