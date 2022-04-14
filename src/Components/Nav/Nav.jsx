import React from "react";
import NavItem from "./NavItem";
import style from "../Header/Header.module.scss";
function Nav(props) {
  return (
    <nav className={style.nav}>
      <NavItem href="/" name="CRYPPO" />
      <NavItem href="/business" name="CRYPPO Business" />
      <NavItem href="/cryppoinvest" name="CRYPPO Invest" />
    </nav>
  );
}

export default Nav;
