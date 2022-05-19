import React from 'react'
import style from './ExchangeCash.module.scss'
import MySelect from './../MySelect/MySelect';
import LkInput from './../LkInput/LkInput';
import ExchangeCashShow from './ExchanheCashShow';
export default function ExchangeCash(props) {

    return (
        <div className='block'>
            <div className={style.container}>
                <div className={style.item}>
                    <MySelect cashOption={props.cashOption} title="Продать" />
                    <LkInput type="number" title="Сумма на продажу" />
                </div>
                <div className={style.item}>
                    <MySelect cashOption={props.cashOption} title="Купить" />
                    <LkInput type="number" title="Сумма на продажу" />
                </div>
            </div>
            <ExchangeCashShow  title="Выберите валюту для обмена" value="1 ETH = 12213.090909090909 USDа" btn="Продолжить" />
        </div>
    )
}
