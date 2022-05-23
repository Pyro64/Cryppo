import React, { useState } from "react";
import { Drawer, Button, Alert, Space } from "antd";
import DrawerTitle from "./DrawerTitle";
import style from "./Drawer.module.scss";
import NavItem from "../Nav/NavItem";
import CheckItem from "../../Lk/CheckLk/CheckItem";
import { NavLink } from "react-router-dom";
import Switch from "../Switch/Switch";
import { CloseOutlined } from "@ant-design/icons";
export default function MyDrawer(props) {
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
  return (
    <Drawer
      placement="right"
      onClose={props.onClose}
      closable={false}
      visible={props.visible}
      bodyStyle={{ padding: "0px" }}
    >
      <div className={style.header}>
        <CloseOutlined className={style.close} onClick={props.onClose} />
        <DrawerTitle title="Профиль" />
        <Switch />
      </div>
      <div className={style.block}>
        <img src={props.img} className={style.img} alt="avatar" />
        <div>
          <p className={style.name}>{props.name}</p>
          <button className={style.out}>выйти</button>
        </div>
      </div>
      <div className={style.links}>
        <NavLink
          to="/business/lk"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link}`
          }
        >
          Служба поддержки
        </NavLink>
        <NavLink
          to="/business/lk/setting"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link}`
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
