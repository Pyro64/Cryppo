import React, { useEffect, useState } from "react";
import style from './LoginBtn.module.scss'
import img from '../../Images/icon/open.png'
import { NavLink } from "react-router-dom";
const Loginbtn = (props) => {
    let value = !props.IsLogin
    if (props.isLogin) {
        return (
            <NavLink to="/cryppoindex/lk" className={({ isActive }) => isActive ? `${style.link} ${style.active}` : `${style.link}`}>Личный Кабинет</NavLink>
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

export default Loginbtn;
