import React from 'react'
import Text from '../Text/Text'
import Subtitle from '../Subtitle/Subtitle'
import Title from '../Title/Title'
import style from './CryppoIndex.module.scss'
import Btn from '../Btn/Btn'

import Suggestions from '../Suggestions/Suggestions'
import BenefitsIndex from '../BenefitsIndex/BenefitsIndex'
import BenefitsIndexItem from '../BenefitsIndex/BenefitsIndexItem'


export default function CryppoIndex(props) {
    return (
        <div className='main'>
         <div className='container'>
            <div className="banner">
                <div className="banner__block">
                    <Title text="CRYPPO Index" gradient="." />
                    <Text text="Автоматически ребалансируемый индекс из 8 самых высококапитализированных цифровых активов на основе машинного обучения (искусственного интеллекта)" />
                    <Btn link="#" text="Узнать больше" />
                </div>
            <div className={style.item}>

            </div>
            </div>
            <Suggestions />
            <div className="aboutIndex">
                <div className="aboutIndex__block">
                    <Subtitle subtitle="О проекте" gradient="." />
                    <Text text="Проект «CRYPPO INDEX» был создан в 2018 году, изначально для личного использования, как инструмент минимизации рисков и преумножения капитала на высоко волатильном рынке цифровых активов." />
                    <Text text="В течение первых 19 месяцев было осуществлено 1574 инвестиционных операции. Итоговая доходность за последние  12 месяцев составила 38% в долларовом эквиваленте (USDT). С июля 2020 года проект стал открытым для внешних инвесторов. Начальная стоимость индекса составляла $1. Стоимость индекса на текущий момент составляет $24.76." />
                </div>
                <div className={style.item}>

                </div>
            </div>
            <div className="benefistIndex">
                <Subtitle  subtitle="Преимущества и гарантии" gradient="."/>
                <BenefitsIndex benefits={props.benefits}/>
            </div>
        </div>

           
        </div>
    )
}
