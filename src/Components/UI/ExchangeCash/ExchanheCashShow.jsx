import React from 'react'
import style from './ExchangeCash.module.scss'
import Btn from './../Btn/Btn';

export default function ExchangeCashShow(props) {
    return (
        <div className={style.bottom}>
            <p>{props.title}</p>
            <p>{props.value}</p>
            <Btn href="#">{props.btn}</Btn>
        </div>
    )
}
