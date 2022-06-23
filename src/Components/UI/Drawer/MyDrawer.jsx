import React, { useState } from "react";
import { Drawer, Button, Alert, Space } from "antd";
import DrawerTitle from "./DrawerTitle";
import style from "./Drawer.module.scss";
import CheckItem from "../../Lk/CheckLk/CheckItem";
import { NavLink } from "react-router-dom";
import Switch from "../Switch/Switch";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { userSlice } from "../../../Redux/user-reducer";
import avatar from "../../../Images/icon/avatar.svg";
export default function MyDrawer(props) {
    const dispatch = useDispatch();
    let alertItem = props.alert.map((e) => (
        <Alert
            key={e.id}
            message={e.message}
            description={e.description}
            type={e.type}
            showIcon
            closable
            id={e.id}
            onClick={() =>
                setTimeout(() => {
                    props.removeAlert(e.id);
                }, 380)
            }
        />
    ));

    let elementCard = props.card
        .map((e) => (
            <CheckItem
                id={e.id}
                key={e.id}
                icon={e.icon}
                text={e.text}
                availability={e.availability}
                prise={e.prise}
            />
        ))
        .slice(0, 2);
    function removeLk() {
        dispatch(userSlice.actions.SetLk(false));
        dispatch(userSlice.actions.LogoutCryppo());
        dispatch(userSlice.actions.LogoutBusiness());
    }
    return (
        <Drawer
            placement="right"
            onClose={props.onClose}
            closable={false}
            visible={props.visible}
            bodyStyle={{ padding: "0px" }}
        >
            <div className={style.header}>
                <CloseOutlined
                    className={style.close}
                    onClick={props.onClose}
                />
                <DrawerTitle title="Профиль" />
                <Switch theme={props.theme} switchTheme={props.switchTheme} />
            </div>
            <div className={style.block}>
                <img
                    src={props.img ?? avatar}
                    className={style.img}
                    alt="avatar"
                />
                <div>
                    <p className={style.name}>{props.name}</p>
                    <button onClick={removeLk} className={style.out}>
                        выйти
                    </button>
                </div>
            </div>
            <div className={style.links}>
                <NavLink
                    to="/business/lk/support"
                    className={({ isActive }) =>
                        isActive
                            ? `${style.link} ${style.active}`
                            : `${style.link}`
                    }
                >
                    Служба поддержки
                </NavLink>
                <NavLink
                    to="/business/lk/setting"
                    className={({ isActive }) =>
                        isActive
                            ? `${style.link} ${style.active}`
                            : `${style.link}`
                    }
                >
                    Настройки
                </NavLink>
            </div>

            <div className={style.balanse}>
                <div className={style.subtitle}>Баланс</div>
                {elementCard}
            </div>
            <div className={style.alerts}>
                {props.alert.length > 0 ? (
                    <div className={style.subtitle}>Уведомления</div>
                ) : (
                    <div className={style.subtitle}>Нет уведомлений</div>
                )}

                {alertItem}
            </div>
        </Drawer>
    );
}
