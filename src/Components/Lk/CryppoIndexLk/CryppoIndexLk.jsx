import React from 'react'
import style from './CryppoIndexLk.module.scss'
import Subtitle from '../../Subtitle/Subtitle'
import Check from './CryppoIndexLkComponents/CheckLk/Check'

export default function CryppoIndexLk(props) {
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
