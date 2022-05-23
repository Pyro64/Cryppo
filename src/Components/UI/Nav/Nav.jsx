import React from "react";
import NavItem from "./NavItem";
import style from "../Header/Header.module.scss";

function Nav(props) {

    return (
        <nav className={style.nav}>
            <NavItem hasLk={props.hasLk}
                     isLk={props.isLk} href="/" name="CRYPPO Wallet"/>
            <NavItem hasLk={props.hasLk}
                     isLk={props.isLk} href="/business" name="CRYPPO Business"/>
            <NavItem hasLk={props.hasLk}
                     isLk={props.isLk} href="/invest" name="CRYPPO Invest"/>
        </nav>
    );
}

export default Nav;
