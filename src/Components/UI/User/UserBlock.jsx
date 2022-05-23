import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./User.module.scss";
import MyDrawer from "../Drawer/MyDrawer";
import { UserOutlined } from "@ant-design/icons";
const Userblock = (props) => {
  function addLk() {
    let value = true;
    props.hasLk(value);
  }

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className={style.block}>
      <div className={style.flex}>
        <NavLink
          onClick={addLk}
          to={`${props.router}/lk`}
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link}`
          }
          end
        >
          Личный Кабинет
        </NavLink>
        <div className={props.alert.length === 0 ? style.none : style.wrapper}>
          <UserOutlined onClick={showDrawer} className={style.icon} />
        </div>
      </div>

      <MyDrawer
        visible={visible}
        onClose={onClose}
        img={props.img}
        name={props.name}
        login={props.login}
        value={props.value}
        card={props.card}
        alert={props.alert}
        removeAlert={props.removeAlert}
        hasLk={props.hasLk}
        isLk={props.isLk}
      />
    </div>
  );
};

export default Userblock;
