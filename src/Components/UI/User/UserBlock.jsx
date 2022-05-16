import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./User.module.scss";
import { CSSTransition } from "react-transition-group";
const Userblock = (props) => {
  const [open, setOpen] = useState(false);
  let toggleHandler = (e) => {
    setOpen(!open);
  };

  return (
    <div className={style.block}>
      <div className={style.flex}>
        <NavLink
          to={`${props.router}/main`}
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
            <NavLink
              to="/"
              className={style.out}
              onClick={() => props.login(props.value)}
            >
              выйти
            </NavLink>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Userblock;
