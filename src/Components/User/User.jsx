import React from 'react'
import style from '../User/User.module.scss'
import { NavLink } from "react-router-dom";
import img from '../../Images/icon/open.png'
export default function User(props) {
    let state = props.user
    let value = true
    if (props.isLogin) {
        return (
            <div>
                <NavLink to='lk' className={({ isActive }) => isActive ? ` ${style.active}` : `${style.link}`}>Личный Кабинет</NavLink>
                <div className={style.login}>
                    <img src={state.img} alt="avatar" />
                    <div>
                        <p>{state.name}</p>
                        <NavLink to='/' onClick={() => props.login(!value)} >выйти</NavLink>
                    </div>
                </div>
            </div>

        )

    }
    else {
        return (
            <div onClick={() => props.login(value)} className={style.container}>
                <p>Войти</p>
                <img src={img} alt="login" />
            </div>
        );
    }
}
