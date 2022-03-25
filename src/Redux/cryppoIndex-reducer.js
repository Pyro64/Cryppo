import Benefist1 from '../Images/icon/Benefist1.svg'
import Benefist2 from '../Images/icon/Benefist2.svg'
import Benefist3 from '../Images/icon/Benefist3.svg'
import Benefist4 from '../Images/icon/Benefist4.svg'
import ICX from '../Images/icon/ICX.svg'
import ETH from '../Images/icon/ETH.svg'
import ARDE from '../Images/icon/ARDE.svg'


let initialState = {

    BenefitsData :[
        {
            id:1,
            icon: Benefist1,
            text:"Ваши инвестиции на личном кошельке инвестора внутри блокчейна CRYPPO INDEX" ,

        },
        {
            id:2,
            icon: Benefist2,
            text:"Абсолютная прозрачность всех инвестиционных транзакций" ,

        },
        {
            id:3,
            icon: Benefist3,
            text:"Отсутствие спекуляций и манипуляций курсом индекса: после вывода средств токены инвестора уничтожаются" ,

        },
        {
            id:4,
            icon: Benefist4,
            text:"Свободный вывод средств по истечении рекомендованного периода" ,

        },


    ],
    AdsoluteData:{
        ChartAbsolute:[
            {
                id:1,
                text:'$45.78'
            },
            
        ],
        ChartItem:[
            {
                
                id:1,
                coinIcon:ICX,
                name:"ICX",
                number:78.444 ,

            },
            {
                id:2,
                coinIcon:ETH,
                name:"ETH",
                number:1.347  ,
            },
            {
                id:3,
                coinIcon:ARDE,
                name:"ARDE",
                number:18.769  ,
            },

        ],
        ChartStatistics:[
            {
                id:1,
                statistic:"50%"
            },
            {
                id:2,
                statistic:"15%"
            },
        ]
    },
    ChartsData:[

    ]
      
    
}
const cryppoIndexReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default cryppoIndexReducer;