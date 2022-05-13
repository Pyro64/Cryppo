
import React from 'react'
import style from './Subtitle.module.scss'
export default function Subtitle(props) {
    return (
        <p style={props.modify} className={`${style.subtitle}`}>
            {props.subtitle}
            <span>{props.gradient}</span>
        </p>
    )
}
