import React from 'react'
import style from '../Header/Header.module.scss'

export default function Login(props) {
    let state = props.login.loginData
    return (
        <div className={style.login}>
            <img src={state.img} alt="avatar" />
            <div>
                <p>{state.name}</p>
                <button >Выйти</button>
            </div>
        </div>
    )
}
