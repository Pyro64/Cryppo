import React, { useContext } from "react";
import style from "./User.module.scss";
import img from "../../../Images/icon/open.png";
import Userblock from "./UserBlock";
import { NavLink } from "react-router-dom";
import getCookie from "../../../Utils/cookies";
import { UIContext } from "../../Context/UIContext";

export default function User(props) {
    const [uiContext, setUiContext] = useContext(UIContext);
    const token = getCookie("business_token");
    const url = uiContext.isBusiness ? "entrance" : "/entrance";
    return (
        <div>
            {token ? (
                <Userblock
                    photo={props.userInfo.photo}
                    firstname={props.userInfo.firstname}
                    login={props.login}
                    routeLk={props.routeLk}
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
