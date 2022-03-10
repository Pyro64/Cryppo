import React from 'react';
import Login from '../Login/Login';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import style from './Header.module.scss'
const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <Logo />
                <Nav />
                <Login />
            </div>
        </div>
    );
}

export default Header;
