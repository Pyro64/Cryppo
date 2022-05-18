import one from '../Images/payIcon/1.svg'
import two from '../Images/payIcon/2.svg'
import three from '../Images/payIcon/3.svg'
import four from '../Images/payIcon/4.svg'
import five from '../Images/payIcon/5.svg'
import six from '../Images/payIcon/6.svg'
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
    cashOption: [
        {
            id: 5,
            value: 'Bitcoin0',
            img: one,
        },
        {
            id: 6,
            value: 'Bitcoin1',
            img: two,
        },
        {
            id: 7,
            value: 'Bitcoin2',
            img: three,
        },
        {
            id: 8,
            value: 'Bitcoin3',
            img: four,
        },
        {
            id: 9,
            value: 'Bitcoin4',
            img: five,
        },
        {
            id: 10,
            value: 'Bitcoin5',
            img: six,
        },
    ]
};
const businessLkReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}



export default businessLkReducer;