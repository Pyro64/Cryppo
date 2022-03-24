import React from 'react'
import style from './BenefistIndex.module.scss'


export default function BenefitsIndexItem(props) {
  return (
        <div className={style.block}>
          <img src={props.icon}className={style.icon}/>
          <div className={style.text}>{props.text}</div>
        </div>
  )
}
