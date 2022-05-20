import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./User.module.scss";
import { CSSTransition } from "react-transition-group";
const Userblock = (props) => {
  let isLk = true;
  const [open, setOpen] = useState(false);
  let toggleHandler = (e) => {
    setOpen(!open);
  };

  return (
    <div className={style.block}>
      <div className={style.flex}>
        <NavLink
          onClick={() => props.hasLk(isLk)}
          to={`${props.router}/lk`}
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link}`
          }
          end
        >
          Личный Кабинет
        </NavLink>
        <div onClick={toggleHandler} className={style.dropdown}></div>
      </div>
      <CSSTransition
        in={open}
        classNames="list-transition"
        unmountOnExit
        appear
        timeout={380}
      >
        <div className="list-body">
          <img src={props.img} alt="avatar" />
          <div>
            <p className="list-text">{props.name}</p>
            <div className={style.out} onClick={() => props.login(props.value)}>
              выйти
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Userblock;
