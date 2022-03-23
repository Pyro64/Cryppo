import React from 'react'
import style from './Title.module.scss'
export default function Title(props) {
    return (
        <h1 data-text={props.text}>{props.text}</h1>
    )
}
