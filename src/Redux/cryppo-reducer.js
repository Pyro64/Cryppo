import cryppoSvg from "../Images/cryppo.svg";
import {CryppoGet} from "../Api/api"


const GET = 'GET';


let initialState = {
  route: {
    logo: cryppoSvg,
    btn: [
      {
        id: 1,
        name: "Кому подойдет",
        to: "about",
      },
    ],
  },
  
};
const cryppoReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET:
          return {
            ...state,
            ...action.value
          };
    default:
      return state;
  }
};
export const getCryppoThunkCreator = () =>{
  return (dispatch) => {
      CryppoGet()
        .then((data)=>{
          let value = JSON.parse(JSON.stringify(data))
          dispatch({type: 'GET', value});
        })
        .catch((response) => {
            console.log(response);
            console.log('error');
        })
  }
}

export const get = (value) => ({ type: GET, value });
export default cryppoReducer;
