import React from 'react'
import style from './Login.module.scss'

export default function Login(props) {
    let state = props.login.loginData
    return (
        <div className={style.block}>
            <img src={state.img} alt="avatar" />
            <div className={style.item}>
                <p>{state.name}</p>
                <button className={style.out}>Выйти</button>
            </div>
        </div>
    )
}
