import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Parallax } from 'react-scroll-parallax';
import LoginContainer from '../Login/LoginContainer';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Scrollbtn from "../ScrollBtn/ScrollBtn";
import style from './Header.module.scss'

const Header = (props) => {
    const [scroll, setScroll] = useState(false)
    let thisLocation = useLocation();
    let value = thisLocation.pathname
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50)
        })
    }, []);
    useEffect(() => {
        switch (value) {
            case '/business':
                props.bussiness()
                break
            case '/cryppoindex':
                props.index()
                break
            default:
                props.cryppo()
                break
        }
    }, [value]);

    let elementItem = props.btn.map(e =>
        <Scrollbtn
            id={e.id}
            key={e.id}
            name={e.name}
            to={e.to}
        />
    )
    return (
        <header className={scroll ? `${style.scroll} ${style.header}` : `${style.header}`}>
            <div className={style.container}>
                <Parallax className={style.parallax} speed={50} translateX={[-200, 100,]} />
                <div className={style.block}>
                    <Logo img={props.logo} />
                    <div className={style.wrapper}>
                        <Nav />
                        <LoginContainer />
                    </div>
                </div>
                <div className={style.item}>
                    {elementItem}
                </div>
            </div>
        </header>
    );
}

export default Header;
