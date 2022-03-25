import React from 'react'
import style from './AboutIndex.module.scss'

export default function AboutIndex(props) {
  return (
    <div className={style.container}>
        <div className={style.money}>
            <div className={style.moneyTitle}>INDEX</div>
            <div className={style.moneyNumber}>{props.money}</div>
        </div>
        <div className={style.coin}>
            <img src={props.icon} className={style.coinIcon}/>
            <div className={style.item}>
                <div className={style.coinName}>{props.name}</div>
                <div className={style.coinNumber}>{props.number}</div>
            </div>
            
        </div>
        <div className={style.graph}></div>
        <div className={style.statistic}></div>
    </div>
  )
}
