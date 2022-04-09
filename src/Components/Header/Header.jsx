import React, { useEffect, useState } from "react";
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Scrollbtn from "../ScrollBtn/ScrollBtn";
import User from "../User/User";
import style from './Header.module.scss'

const Header = (props) => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50)
        })
    }, []);
    let elementItem = props.btn.map(e =>
        <Scrollbtn
            id={e.id}
            key={e.id}
            name={e.name}
            to={e.to}
        />
    )
    if (props.isLogin) {
        return (
            <header className={scroll ? `${style.scroll} ${style.header}` : `${style.header}`}>
                <div className={style.container}>
                    <div className={style.block}>
                        <Logo logo={props.logo} />
                        <div className={style.wrapper}>
                            <Nav />
                            <User login={props.login} isLogin={props.isLogin} loginData={props.loginData} userData={props.userData} />
                        </div>
                    </div>
                </div>
            </header>
        );
    } else {
        return (
            <header className={scroll ? `${style.scroll} ${style.header}` : `${style.header}`}>
                <div className={style.container}>
                    <div className={style.block}>
                        <Logo logo={props.logo} />
                        <div className={style.wrapper}>
                            <Nav />
                            <User login={props.login} isLogin={props.isLogin} loginData={props.loginData} userData={props.userData} />
                        </div>
                    </div>
                    <div className={style.item}>
                        {elementItem}
                    </div>
                </div>
            </header>
        );
    }

}

export default Header;
