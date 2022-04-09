import React from 'react'
import style from '../User/User.module.scss'
import { NavLink } from "react-router-dom";
import img from '../../Images/icon/open.png'
export default function User(props) {
    let state = props.userData
    console.log(props)
    let value = true
    if (props.isLogin) {
        return (
            <div>
                <NavLink to='lk' className={({ isActive }) => isActive ? `${style.link} ${style.active}` : `${style.link}`}>Личный Кабинет</NavLink>
            </div>
            // <div className={style.login}>
            //     <img src={state.img} alt="avatar" />
            //     <div>
            //         <p>{state.name}</p>
            //         <div onClick={() => props.login(!value)} >выйти</div>
            //     </div>
            // </div>
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
