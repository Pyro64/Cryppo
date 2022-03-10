import React from 'react'
import style from './Title.module.scss'
export default function Title(props) {
    return (
        <h1 className={style.text}>{props.text}</h1>
    )
}
