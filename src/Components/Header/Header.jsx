import React from 'react';
import LoginContainer from '../Login/LoginContainer';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import style from './Header.module.scss'
const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <Logo />
                <div className={style.block}>
                    <Nav />
                    <LoginContainer />
                </div>
            </div>
        </div>
    );
}

export default Header;
