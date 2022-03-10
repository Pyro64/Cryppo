import annaBobs from '../Images/login/anna_bobs.svg'

let initialState = {
    loginData:
    {
        id: 1,
        img: annaBobs,
        name: "Anna Bobs",
        isLogin: true
    },
};
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default loginReducer;