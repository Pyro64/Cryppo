import React from 'react'
import style from './Check.module.scss'
import CheckItem from './CheckItem'

export default function Check(props) {
  let elementCard = props.card.map(e =>
    <CheckItem
      id={e.id}
      key={e.id}
      icon={e.icon}
      text={e.text}
      availability={e.availability}
      prise={e.prise}
    />
  )
  return (
    <div className={style.block}>
         <div className={style.item}>{elementCard}</div>
      <div className={style.card}>
        <div className={style.drop}/>
        <div className={style.text}>Банковские карты</div>
        <div className={style.card}></div>
      </div>
    </div>
  )
}
