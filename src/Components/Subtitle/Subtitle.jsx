
import React from 'react'
import style from './Subtitle.module.scss'
export default function Subtitle(props) {
    if (props.textAlign) {
        return (
            <p className={`${style.subtitle} ${style.textAlign}`}>
                {props.subtitle}
                <span>{props.gradient}</span>
            </p>
        )
    } else {
        return (
            <p className={style.subtitle}>
                {props.subtitle}
                <span>{props.gradient}</span>
            </p>
        )
    }

}
