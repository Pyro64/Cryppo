
let initialState = {
    HistoryItem: [
        {
            date: '17 апреля',
            statusText: 'Полученно',
            code: '3JGVRYVJKn6a7wj7sezzcaecHrXaoZiHJT',
            status: 'completed'
        },
        {
            date: '17 апреля',
            statusText: 'Отказ',
            code: '3JGVRYVJKn6a7wj7sezzcaecHrXaoZiHJT',
            status: 'error'
        },
        {
            date: '17 апреля',
            statusText: 'Полученно',
            code: '3JGVRYVJKn6a7wj7sezzcaecHrXaoZiHJT',
            status: 'completed'
        },
        {
            date: '17 апреля',
            statusText: 'Отправленно',
            code: '3JGVRYVJKn6a7wj7sezzcaecHrXaoZiHJT',
            status: 'wait'
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