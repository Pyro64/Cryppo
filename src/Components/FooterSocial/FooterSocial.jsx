import React from 'react'
import style from './FooterSocial.module.scss'

export default function FooterSocial(props) {
  return (
      <a href={props.href}>
        <img src={props.icon} alt='socialIcon' style={style.iconSocial}/>
      </a>
  )
}
