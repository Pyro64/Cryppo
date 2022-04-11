import usd from '../Images/payIcon/12.svg'
import icx from '../Images/payIcon/6.svg'
import arde from '../Images/payIcon/arde.svg'
import eth from '../Images/payIcon/eth.svg'
import masterCard from '../Images/icon/mastercard.svg'
import visa from '../Images/icon/VISA.svg'

let initialState={
    cardData:[
        {
            id:1,
            icon: eth,
            text:"ETH",
            availability:"1.234 ETH",
            prise: "9 656 $",
        },
        {
            id:2,
            icon: icx,
            text:"ICX",
            availability:"78.444 ICX",
            prise: "9 656 $",
        },
        {
            id:2,
            icon: arde,
            text:"ARDE",
            availability:"17.235 ARDE",
            prise: "9 656 $",
        },
        {
            id:1,
            icon: usd,
            text:"USD",
            availability:"56.254 USD",
            prise: "9 656 $",
        },
    ],
    bankCardData:[
        {
            id:1,
            number:5678,
            logo: masterCard,
        },
        {
            id:2,
            number:7658,
            logo: visa,

        },
    ]
}

const cryppoIndexLkReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default cryppoIndexLkReducer