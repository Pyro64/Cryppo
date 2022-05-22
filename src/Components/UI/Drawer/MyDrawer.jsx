import React, { useState } from "react";
import { Drawer, Button, Alert, Space } from "antd";
import DrawerTitle from "./DrawerTitle";
import style from "./Drawer.module.scss";
import NavItem from "../Nav/NavItem";
import CheckItem from "../../Lk/CheckLk/CheckItem";
import { NavLink } from "react-router-dom";
import Switch from "../Switch/Switch";
export default function MyDrawer(props) {
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
      closable={false}
      onClose={props.onClose}
      visible={props.visible}
      bodyStyle={{ padding: "0px" }}
    >
      <div className={style.header}>
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
        <div className={style.subtitle}>Уведомления</div>
        <Alert
          message="Success Tips"
          description="Detailed description and advice about successful copywriting."
          type="success"
          showIcon
          closable
        />
        <Alert
          message="Informational Notes"
          description="Additional description and information about copywriting."
          type="info"
          showIcon
          closable
        />
        <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
          closable
        />
      </div>
    </Drawer>
  );
}
