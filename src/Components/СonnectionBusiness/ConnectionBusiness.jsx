import React from 'react'
import Subtitle from '../Subtitle/Subtitle'
import style from './ConnectionBusiness.module.scss'
import Text from '../Text/Text'
import ConnectionBusinessItem from './ConnectionBusinessItem'
export default function ConnectionBusiness(props) {
  let elementItem = props.connectionList.map(e =>
    <ConnectionBusinessItem
       id={e.id}
       key={e.id}
       text={e.text}
    />
 )
  return (
    <div> 
        <div className={style.item}>
        <Subtitle subtitle="Как подключить CRYPPO Business" gradient="?"/>
        <Text text="Вы сможете легко настроить CRYPPO Business под любой бизнес: от небольшого интернет-магазина до крупной компании с клиентами по всему миру."/>
        <div className={style.list}>{elementItem}</div>
        </div>
        <div className={style.item}></div>
 
    </div>
  )
}
