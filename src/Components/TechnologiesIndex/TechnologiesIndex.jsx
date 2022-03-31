import React from 'react'
import Subtitle from '../Subtitle/Subtitle'
import Text from '../Text/Text'
import style from './TechnologiesIndex.module.scss'
export default function TechnologiesIndex() {
    return (
        <div className={style.container}>
            <Subtitle modify={{ textAlign: "center" }} subtitle="О технологии" gradient="." />
            <Text modify={{ textAlign: "center" }} text="Специально обученная нейронная сеть в режиме реального времени 24/7, 
            анализирует состояние рынка, составляет прогноз, совершает от 48 до 96 операций ребалансирования в сутки и изменяет балансовый 
            состав индекса для увеличения финансовой стоимости активов инвесторов." />
        </div>
    )
}
