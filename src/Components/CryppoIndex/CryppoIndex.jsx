import React from 'react'
import Text from '../Text/Text'
import Subtitle from '../Subtitle/Subtitle'
import Title from '../Title/Title'
import style from './CryppoIndex.module.scss'
import Btn from '../Btn/Btn'
import ChartIndex from '../ChartIndex/ChartIndex'
import Suggestions from '../Suggestions/Suggestions'
import BenefitsIndex from '../BenefitsIndex/BenefitsIndex'
import AboutIndex from '../AboutIndex/AboutIndex'

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
                    <Text modify={{marginBottom:"20px"}} text="Проект «CRYPPO INDEX» был создан в 2018 году, изначально для личного использования, как инструмент минимизации рисков и преумножения капитала на высоко волатильном рынке цифровых активов." />
                    <Text text="В течение первых 19 месяцев было осуществлено 1574 инвестиционных операции. Итоговая доходность за последние  12 месяцев составила 38% в долларовом эквиваленте (USDT). С июля 2020 года проект стал открытым для внешних инвесторов. Начальная стоимость индекса составляла $1. Стоимость индекса на текущий момент составляет $24.76." />
                </div>
                <div className={style.item}>
                    <AboutIndex/>
                </div>
            </div>
            <div className="benefistIndex">
                <Subtitle modify={{textAlign:"center"}} subtitle="Преимущества и гарантии" gradient="."/>
                <BenefitsIndex benefits={props.benefits}/>
            </div>
            </div>
            <ChartIndex style={style.chart}/>
            <div className='container'>
            <Subtitle modify={{textAlign:"center"}} subtitle="О технологии" gradient="."/>
            <Text modify={{textAlign:"center"}} text="Специально обученная нейронная сеть в режиме реального времени 24/7, анализирует состояние рынка, составляет прогноз, совершает от 48 до 96 операций ребалансирования в сутки и изменяет балансовый состав индекса для увеличения финансовой стоимости активов инвесторов."/>
            </div>
        </div>
    )
}
