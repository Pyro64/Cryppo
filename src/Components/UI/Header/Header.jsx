import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import NavItem from "../Nav/NavItem";
import Scrollbtn from "../ScrollBtn/ScrollBtn";
import User from "../User/User";
import style from "./Header.module.scss";

const Header = (props) => {
  const [scroll, setScroll] = useState(false);
  const [burger, setBurger] = useState(false);
  const burgerModal = () => {
    setBurger(!burger);
    console.log(burger);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 30);
    });
  }, []);
  let linkBtn = props.btn.map((e) => (
    <Scrollbtn id={e.id} key={e.id} name={e.name} to={e.to} />
  ));
  let scrollBtn = props.nav.map((e) => (
    <NavItem id={e.id} key={e.id} name={e.name} href={e.href} />
  ));

  return (
    <header
      className={scroll ? `${style.header} ${style.scroll}` : `${style.header}`}
    >
      <div className={style.container}>
        <div className={style.block}>
          <Logo logo={props.logo} />

          <div
            className={
              burger
                ? `${style.wrapper}`
                : `${style.wrapper} ${style.wrapperOpen}`
            }
          >
            <Nav hasLk={props.hasLk} isLk={props.isLk} />
            {props.isEntrance !== false ? (
              <User
                login={props.login}
                isLogin={props.isLogin}
                user={props.user}
                router={props.router}
                hasLk={props.hasLk}
                isLk={props.isLk}
                isBusiness={props.isBusiness}
                card={props.card}
                alert={props.alert}
                removeAlert={props.removeAlert}
              />
            ) : null}
          </div>
          <div
            onClick={burgerModal}
            className={
              burger ? `${style.burger}` : `${style.burger} ${style.open}`
            }
          >
            <span></span>
          </div>
        </div>
        {props.isLk ? (
          <div
            className={
              burger ? `${style.item}` : `${style.item} ${style.wrapperOpen}`
            }
          >
            {scrollBtn}
          </div>
        ) : (
          <div className={style.item}>{linkBtn}</div>
        )}
      </div>
    </header>
  );
};

export default Header;
