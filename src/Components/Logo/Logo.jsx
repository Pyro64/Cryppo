import React from 'react'
import cryppo from '../../Images/cryppo.svg'
import style from '../Header/Header.module.scss'
export default function Logo() {
    return (
        <img className={style.logo} src={cryppo} />
    )
}
