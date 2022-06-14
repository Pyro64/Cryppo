import React from "react";
import style from "./User.module.scss";
import img from "../../../Images/icon/open.png";
import Userblock from "./UserBlock";
import { NavLink, useParams } from "react-router-dom";

export default function User(props) {
    let value = !props.isLogin;
    const url = props.isBusiness ? "entrance" : "/entrance";
    return (
        <div>
            {props.isLogin ? (
                <Userblock
                    value={value}
                    img={props.user.img}
                    name={props.user.name}
                    login={props.login}
                    routeLk={props.routeLk}
                    isLk={props.isLk}
                    isBusiness={props.isBusiness}
                    card={props.card}
                    alert={props.alert}
                    removeAlert={props.removeAlert}
                    switchTheme={props.switchTheme}
                    theme={props.theme}
                />
            ) : (
                <NavLink to={url} className={style.container}>
                    <p>Войти</p>
                    <img src={img} alt="login" />
                </NavLink>
            )}
        </div>
    );
}
