import Benefist1 from '../Images/icon/Benefist1.svg'
import Benefist2 from '../Images/icon/Benefist2.svg'
import Benefist3 from '../Images/icon/Benefist3.svg'
import Benefist4 from '../Images/icon/Benefist4.svg'


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


    ]
}
const cryppoIndexReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default cryppoIndexReducer;