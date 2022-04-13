import React from 'react'
import style from '../User/User.module.scss'
import img from '../../Images/icon/open.png'
import Userblock from './UserBlock';
export default function User(props) {
    let value = true
    if (props.isLogin) {
        return (
            <Userblock value={value} img={props.user.img} name={props.user.name} login={props.login} />
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
