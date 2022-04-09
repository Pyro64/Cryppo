import React, { useEffect, useState } from "react";
import style from './LoginBtn.module.scss'
import img from '../../Images/icon/open.png'
import { NavLink } from "react-router-dom";
import Login from "../User/User";
const Userbtn = (props) => {
    // const [state, setstate] = useState(initialState);
    let value = true

    console.log(props)
    if (props.isLogin) {
        return (
            <div>
                <NavLink to='lk' className={({ isActive }) => isActive ? `${style.link} ${style.active}` : `${style.link}`}>Личный Кабинет</NavLink>
                <div onClick={() => props.login(!value)} >выйти</div>
                <Login />
            </div>
        );
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

export default Userbtn;
