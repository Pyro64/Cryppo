import React, { useEffect, useState } from "react";
import style from './LoginBtn.module.scss'
import img from '../../Images/icon/open.png'
import { NavLink } from "react-router-dom";
const Loginbtn = (props) => {
    // const [state, setstate] = useState(initialState);
    let value = true
    console.log(props)
    if (props.isLogin) {
        return (
            <div>
                <NavLink to={props.url} className={({ isActive }) => isActive ? `${style.link} ${style.active}` : `${style.link}`}>Личный Кабинет</NavLink>
                <div >выйти</div>
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

export default Loginbtn;
