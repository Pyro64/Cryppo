import React from 'react'
import style from './ExchangeCash.module.scss'
import MySelect from './../MySelect/MySelect';
import LkInput from './../LkInput/LkInput';
import ExchangeCashShow from './ExchanheCashShow';
export default function ExchangeOutput(props) {
  return (
    <div className='block'>
    <div className={style.container}>
        <div className={style.item}>
            <MySelect cashOption={props.cashOption} title="Вывод" />
            <LkInput type="number" title="Сумма перевода" />
        </div>
        <div className={style.item}>
            <LkInput type="text" title="Адрес кошелька" />
            <LkInput disable={true} type="text" title="Комиссия" value="3 BTC" />
            
        </div>
    </div>
    <ExchangeCashShow title="Сумма к списанию" value="0.0060001" btn="Вывести" />
</div>
  )
}
