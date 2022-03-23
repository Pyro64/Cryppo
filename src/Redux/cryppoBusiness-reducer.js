import one from '../Images/payIcon/1.svg'
import two from '../Images/payIcon/2.svg'
import three from '../Images/payIcon/3.svg'
import four from '../Images/payIcon/4.svg'
import five from '../Images/payIcon/5.svg'
import six from '../Images/payIcon/6.svg'
import seven from '../Images/payIcon/7.svg'
import each from '../Images/payIcon/8.svg'
import nine from '../Images/payIcon/9.svg'
import ten from '../Images/payIcon/10.svg'
import eleven from '../Images/payIcon/11.svg'
import tvelve from '../Images/payIcon/12.svg'

import money from '../Images/icon/money.svg'
import shield from '../Images/icon/shield.svg'
import world from '../Images/icon/world.svg'
let initialState = {
    appIconData: [
        {
            id: 1,
            svg: one,
            text: 'BTC',
        },
        {
            id: 2,
            svg: two,
            text: 'BTC2',
        },
        {
            id: 3,
            svg: three,
            text: 'BTC3',
        },
        {
            id: 4,
            svg: four,
            text: 'BTC4',
        },
        {
            id: 5,
            svg: five,
            text: 'BT5',
        },
        {
            id: 6,
            svg: six,
            text: 'BTC6',
        },
        {
            id: 7,
            svg: seven,
            text: 'BTC7',
        },
        {
            id: 8,
            svg: each,
            text: 'BTC8',
        },
        {
            id: 9,
            svg: nine,
            text: 'BTC9',
        },
        {
            id: 10,
            svg: ten,
            text: 'BTC10',
        },
        {
            id: 11,
            svg: eleven,
            text: 'BTC11',
        },
        {
            id: 12,
            svg: tvelve,
            text: 'BTC12',
        },
    ],
    descriptionData: [
        {
            id: 1,
            number: 13,
            text: "самых популярных криптовалют",
            img: money,
        },
        {
            id: 2,
            number: 7,
            text: "стейблкоинов, чтобы защитить ваш доход от высокой волатильности",
            img: shield,
        },
        {
            id: 3,
            number: 190,
            text: "стран, из которых вы сможете принимать платежи",
            img: world,
        },
    ],
    whoSuitsData: [
        {
            id: 1,
            title: 'Международный бизнес',
            text: 'CRYPPO Business упрощает работу с иностранными покупателями и делает ваш бизнес более открытым для новых клиентов и партнёров.',
        },
        {
            id: 2,
            title: 'Интернет-магазины',
            text: 'CRYPPO Business подходит для оплаты любых товаров или услуг в криптовалюте и помогает вашему магазину выйти на новую аудиторию покупателей.',
        },
        {
            id: 3,
            title: 'Краудфандинг',
            text: 'CRYPPO Business позволяет принимать пожертвования в криптовалюте со всего мира, чтобы ваш проект получил поддержку в других странах и смог собрать больше денег.',
        },
        {
            id: 4,
            title: 'Малый бизнес',
            text: 'Условия платёжной системы CRYPPO Business подойдут для компаний с небольшими оборотами и локальных проектов, которые ищут возможности для дальнейшего развития.',
        },
        {
            id: 5,
            title: 'Стартапы',
            text: 'CRYPPO Business поможет начать быстрый рост в сфере криптовалютной коммерции и получить преимущество перед конкурентами с первых дней работы. ',
        },
    ],
    aboutData: [
        {
            id: 1,
            title: 'Защита от волатильности',
            text: 'CRYPPO Business упрощает работу с иностранными покупателями и делает ваш бизнес более открытым для новых клиентов и партнёров.',
        },
        {
            id: 2,
            title: 'Настройка комиссии',
            text: 'CRYPPO Business подходит для оплаты любых товаров или услуг в криптовалюте и помогает вашему магазину выйти на новую аудиторию покупателей.',
        },
        {
            id: 3,
            title: 'Экономия на транзакциях',
            text: 'CRYPPO Business позволяет принимать пожертвования в криптовалюте со всего мира, чтобы ваш проект получил поддержку в других странах и смог собрать больше денег.',
        },
        {
            id: 4,
            title: 'Единый стиль',
            text: 'Условия платёжной системы CRYPPO Business подойдут для компаний с небольшими оборотами и локальных проектов, которые ищут возможности для дальнейшего развития.',
        },
        {
            id: 5,
            title: 'Отслеживание заказов',
            text: 'CRYPPO Business поможет начать быстрый рост в сфере криптовалютной коммерции и получить преимущество перед конкурентами с первых дней работы.',
        },
        {
            id: 6,
            title: 'Без переплат',
            text: 'CRYPPO Business позволяет принимать пожертвования в криптовалюте со всего мира, чтобы ваш проект получил поддержку в других странах и смог собрать больше денег.',
        },
    ],
};
const cryppoBusinessReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default cryppoBusinessReducer;