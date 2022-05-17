import React, { Children } from 'react'
import style from './Btn.module.scss'

export default function Btn({ children, ...props }) {
  return (
    <a {...props} className={style.btn} >{children}</a>
  )
}
