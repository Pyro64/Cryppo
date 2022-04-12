import React from 'react'
import style from './Check.module.scss'
export default function CheckItem(props) {
  return (
    <div className={style.line}>
        <img src={props.icon} className={style.icon}/>
        <div className={style.text}>{props.text}</div>
        <div className={style.column}>
        <div className={style.availability}>{props.availability}</div>
        <div className={style.prise}>{props.prise}</div>
        </div>
    </div>
  )
}
