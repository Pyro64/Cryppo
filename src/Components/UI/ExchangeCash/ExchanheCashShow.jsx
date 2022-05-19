import React from 'react'
import style from './ExchangeCash.module.scss'
import Btn from './../Btn/Btn';

export default function ExchangeCashShow() {
    return (
        <div className={style.bottom}>
            <p>Выберите валюту для обмена</p>
            <p>1 ETH = 12213.090909090909 USDа</p>
            <Btn href="#">Продолжить</Btn>
        </div>
    )
}
