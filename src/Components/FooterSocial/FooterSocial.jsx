import React from 'react'
import style from './FooterSocial.module.scss'

export default function FooterSocial(props) {
  return (
      <a href={props.href} className={style.icon}>
        <img src={props.icon} alt='socialIcon' className={style.iconSocial}/>
      </a>
  )
}
