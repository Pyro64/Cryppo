import React from 'react'
import style from './BenefitsIndex.module.scss'


export default function BenefitsIndexItem(props) {
  return (
    <div className={style.item}>
      <img src={props.icon} alt="icon" />
      <div className={style.text}>{props.text}</div>
    </div>
  )
}
