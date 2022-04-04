
import img1 from '../Images/payIcon/1.svg'
import img2 from '../Images/payIcon/2.svg'
import img3 from '../Images/payIcon/3.svg'
import img4 from '../Images/payIcon/4.svg'
import img5 from '../Images/payIcon/5.svg'
import img6 from '../Images/payIcon/6.svg'
import img7 from '../Images/payIcon/11.svg'
const INDEX_STEP = 'INDEX_STEP';
let initialState = {
    bannerIndex: {
        icon: [
            {
                id: 1,
                img: img1
            },
            {
                id: 2,
                img: img2
            },
            {
                id: 3,
                img: img3
            },
            {
                id: 4,
                img: img4
            },
            {
                id: 5,
                img: img5
            },
            {
                id: 6,
                img: img6
            },
            {
                id: 7,
                img: img7
            }
        ],
    },
    step: 1,
};
const animReducer = (state = initialState, action) => {
    switch (action.type) {
        case INDEX_STEP:
            return {
                ...state,
                step: action.value,
            };
        default:
            return state;
    }
}
export const addStep = (value) => ({ type: INDEX_STEP, value })
export default animReducer;