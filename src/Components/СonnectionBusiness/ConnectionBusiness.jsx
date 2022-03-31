import React from 'react'
import Subtitle from '../Subtitle/Subtitle'
import style from './ConnectionBusiness.module.scss'
import Text from '../Text/Text'
import ConnectionBusinessItem from './ConnectionBusinessItem'
import { Parallax } from 'react-scroll-parallax'
import img from '../../Images/content/connect-business.svg'
import card from '../../Images/content/card.svg'
export default function ConnectionBusiness(props) {
  let elementItem = props.connectionList.map(e =>
    <ConnectionBusinessItem
      id={e.id}
      key={e.id}
      text={e.text}
    />
  )
  return (
    <div id="connect" className={style.container}>
      <div className={style.block}>
        <Subtitle subtitle="Как подключить CRYPPO Business" gradient="?" />
        <Text text="Вы сможете легко настроить CRYPPO Business под любой бизнес: от небольшого интернет-магазина до крупной компании с клиентами по всему миру." />
        <div className={style.list}>
          {elementItem}
        </div>
      </div>
      <div className={style.animate}>
        <img className={style.img} src={img} alt="" />
        <img className={style.card} src={card} alt="" />
      </div>
      <Parallax className={style.parallax} translateX={[300, -300,]} />
    </div>
  )
}
