import React from 'react'
import style from './AboutBusiness.module.scss'

export default function AboutBusinessItem(props) {
    return (
        <div className={style.item}>
            <div className={style.title}>{props.title}</div>
            <div className={style.text}>{props.text}</div>
        </div>
    )
}