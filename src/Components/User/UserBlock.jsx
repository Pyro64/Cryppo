import React, { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import style from '../User/User.module.scss'
const Userblock = (props) => {
    const [open, setOpen] = useState(false);
    let toggleHandler = (e) => {
        setOpen(!open);
    };

    let url = useLocation()
    let val = url.pathname.split('/')[0];
    return (
        <div className={style.block}>
            <div className={style.flex}>
                <NavLink to='lk' className={({ isActive }) => isActive ? `${style.link} ${style.active}` : `${style.link}`}>Личный Кабинет</NavLink>
                <div onClick={toggleHandler} className={style.dropdown}></div>
            </div>
            <div className={open ? `${style.login} ${style.open}` : `${style.login}`}>
                <img src={props.img} alt="avatar" />
                <div>
                    <p>{props.name}</p>
                    <NavLink to={val} className={style.out} onClick={() => props.login(!props.value)}>выйти</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Userblock;
