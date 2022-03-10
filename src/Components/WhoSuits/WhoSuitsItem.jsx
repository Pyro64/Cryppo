import React from 'react'
import style from './WhoSuits.module.scss'
export default function WhoSuitsItem(props) {
    return (
        <div className={style.item}>
            <div className={style.title}>{props.title}</div>
            <div className={style.text}>{props.text}</div>
        </div>
    )
}
