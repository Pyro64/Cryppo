import React from 'react'
import { NavLink } from 'react-router-dom'
import style from"./GeneralSetting.module.scss"

export default function MailSetting(props) {
  return (
    <div className={style.mail}>
    <div className={style.mailContainer}>
    <div className={style.mailText}>Email:</div>
    <div className={style.mailContent}>{props.user.mail}</div>
    </div>
    <div className={style.link}>
    <NavLink to="" className={style.linkItem}>Сменить почту</NavLink>
    <NavLink to="" className={style.linkItem}>Сменить пароль</NavLink>
    </div>
    </div>
  )
}
