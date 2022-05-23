import React from 'react'
import style from './Notification.module.scss'

export default function NotifocathionItem(props) {
  return (
    <div className={style.pushContainer}><div className={style.pushName}>
    {props.name}
  </div>
  <div className={style.pushItem}>
    <input id={props.id} type="checkbox"/>
    <label className={style.pushLabel} htmlFor={props.id}>
      <div className={style.pushText}>Email</div>
    </label>
    <input id={`${props.id}t`} type="checkbox"/>	
    <label className={style.pushLabel} htmlFor={`${props.id}t`}>
      <div className={style.pushText}>Telegram</div>
    </label>
  </div></div>
  )
}
