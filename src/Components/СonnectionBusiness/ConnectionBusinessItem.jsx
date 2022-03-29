import React from 'react'
import style from './ConnectionBusiness.module.scss'

export default function ConnectionBusinessItem(props) {
  return (
        <ol className={style.listConatinet}>
          <li>{props.text}</li>
        </ol>
        )
}
