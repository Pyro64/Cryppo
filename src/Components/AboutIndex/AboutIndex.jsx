import React from 'react'
import Subtitle from '../Subtitle/Subtitle'
import Text from '../Text/Text'
import AboutChart from './AboutChart'
import style from './AboutIndex.module.scss'
import AboutIndexBar from './AboutIndexBar'
import AboutIndexCoin from './AboutIndexCoin'





export default function AboutIndex(props) {
  let index = props.aboutData.Index

  return (
    <div className={style.container}>

      <div className={style.flex}>
        <div className={style.block}>
          <Subtitle subtitle="О проекте" gradient="." />
          <Text modify={{ marginBottom: "20px" }} text="Проект «CRYPPO INDEX» был создан в 2018 году, изначально для личного использования, как инструмент минимизации рисков и преумножения капитала на высоко волатильном рынке цифровых активов." />
          <Text text="В течение первых 19 месяцев было осуществлено 1574 инвестиционных операции. Итоговая доходность за последние  12 месяцев составила 38% в долларовом эквиваленте (USDT). С июля 2020 года проект стал открытым для внешних инвесторов. Начальная стоимость индекса составляла $1. Стоимость индекса на текущий момент составляет $24.76." />
        </div>

        <div className={style.content}>
          <div className={style.gradient}></div>
          <div className={style.index}>
            <h3>{index.title}</h3>
            <p>{index.text}</p>
          </div>
          <AboutIndexCoin coin={props.aboutData.CoinItem} />
          <AboutIndexBar bar={props.aboutData.Bar} />
          <div className={style.chart}>
            <AboutChart />
          </div>
        </div>


      </div>
    </div>
  )
}
