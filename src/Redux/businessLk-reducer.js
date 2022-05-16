import ten from '../Images/payIcon/10.svg'
let initialState = {
    coin: [
    {
        img: ten,

    }
]
};
const businessLkReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}



export default businessLkReducer;