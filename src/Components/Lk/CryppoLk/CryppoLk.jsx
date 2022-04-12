import React from 'react'
import style from './CryppoLk.module.scss'
import Subtitle from '../../Subtitle/Subtitle'
import Check from './CryppoLkComponents/CheckLk/Check'

export default function CryppoLk(props) {
    debugger
    return (
        <div className={style.container}>
            <div className={style.item}>
            <Subtitle subtitle='Счета и карты'/>
            <Check card={props.card} bankCard={props.bankCard} />
            </div>
        </div>
    )
}
