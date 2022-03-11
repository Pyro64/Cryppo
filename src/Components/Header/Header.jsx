import React, { useEffect, useState } from "react";
import { Parallax } from 'react-scroll-parallax';
import LoginContainer from '../Login/LoginContainer';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import style from './Header.module.scss'

const Header = (props) => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100)
        })
    }, []);
    return (
        <header className={scroll ? `${style.scroll}` : `${style.header}`}>
            <div className={style.container}>
                <Parallax className={style.parallax} speed={50} translateX={[-200, 100,]} />
                <div className={style.block}>
                    <Logo />
                    <div className={style.wrapper}>
                        <Nav />
                        <LoginContainer />
                    </div>
                </div>
                <div className={style.item}>
                    <div>Кому подойдет</div>
                    <div>Преимущества</div>
                    <div>Как подключить</div>
                    <div>FAQ</div>
                    <div>Мобильное приложение</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
