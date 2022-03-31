import React from 'react'
import Subtitle from '../Subtitle/Subtitle'
import Text from '../Text/Text'
import style from './AboutIndex.module.scss'

export default function AboutIndex(props) {
  return (
    <div className={style.container}>
      <div className={style.flex}>
        <div className={style.block}>
          <Subtitle subtitle="О проекте" gradient="." />
          <Text modify={{ marginBottom: "20px" }} text="Проект «CRYPPO INDEX» был создан в 2018 году, изначально для личного использования, как инструмент минимизации рисков и преумножения капитала на высоко волатильном рынке цифровых активов." />
          <Text text="В течение первых 19 месяцев было осуществлено 1574 инвестиционных операции. Итоговая доходность за последние  12 месяцев составила 38% в долларовом эквиваленте (USDT). С июля 2020 года проект стал открытым для внешних инвесторов. Начальная стоимость индекса составляла $1. Стоимость индекса на текущий момент составляет $24.76." />
        </div>
        <div className={style.content}>

        </div>
      </div>
      {/* <div className={style.money}>
        <div className={style.moneyTitle}>INDEX</div>
        <div className={style.moneyNumber}>{props.money}</div>
      </div>
      <div className={style.coin}>
        <img src={props.icon} alt="icon" className={style.coinIcon} />
        <div className={style.item}>
          <div className={style.coinName}>{props.name}</div>
          <div className={style.coinNumber}>{props.number}</div>
        </div>

      </div>
      <div className={style.graph}></div>
      <div className={style.statistic}></div> */}
    </div>
  )
}
