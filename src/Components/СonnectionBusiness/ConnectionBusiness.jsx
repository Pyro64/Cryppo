import React from 'react'
import Subtitle from '../Subtitle/Subtitle'
import style from './ConnectBusiness.module.scss'
import Text from '../Text/Text'
export default function ConnectionBusiness(props) {
  return (
    <div> 
        <div className={style.item}>
        <Subtitle subtitle="Как подключить CRYPPO Business" gradient="?"/>
        <Text text="Вы сможете легко настроить CRYPPO Business под любой бизнес: от небольшого интернет-магазина до крупной компании с клиентами по всему миру."/>
        <div className={style.list}>{props.list}</div>
        </div>
        <div className={style.item}></div>
 
    </div>
  )
}
