import React from "react";
import style from "../User/User.module.scss";
import img from "../../Images/icon/open.png";
import Userblock from "./UserBlock";

export default function User(props) {
    let value = !props.isLogin;
    const test = () => {
    props.login(value)
    }
    return (
        <div>
            {props.isLogin
                ? <Userblock
                    value={value}
                    img={props.user.img}
                    name={props.user.name}
                    login={props.login}/>
                :
                <div onClick={test} className={style.container}>
                    <p>Войти</p>
                    <img src={img} alt="login"/>
                </div>
            }
        </div>
    )
}
