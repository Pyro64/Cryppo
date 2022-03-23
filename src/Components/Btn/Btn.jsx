import React from 'react'
import style from './Btn.module.scss'

export default function Btn (props) {
  return (
    <a href="#" className={style.btn} >{props.text}</a>
  )
}
