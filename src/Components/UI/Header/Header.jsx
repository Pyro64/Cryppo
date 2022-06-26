import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import NavItem from "../Nav/NavItem";
import Scrollbtn from "../ScrollBtn/ScrollBtn";
import User from "../User/User";
import style from "./Header.module.scss";
import { Drawer } from "antd";
import { useWindowSize } from "react-use";
const Header = (props) => {
    const [scroll, setScroll] = useState(false);
    const [burger, setBurger] = useState(false);
    const { width } = useWindowSize();
    const onClose = () => {
        setBurger(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 30);
        });
    }, []);
    let linkBtn = props.header.route.btn.map((e) => (
        <Scrollbtn id={e.id} key={e.id} name={e.name} to={e.to} />
    ));
    let scrollBtn = props.header.navData.map((e) => (
        <NavItem id={e.id} key={e.id} name={e.name} href={e.href} />
    ));

    if (width > 992) {
        return (
            <header
                className={
                    scroll
                        ? `${style.header} ${style.scroll}`
                        : `${style.header}`
                }
            >
                <div className={style.container}>
                    <div className={style.block}>
                        <Logo logo={props.header.route.logo} />

                        <Nav isLk={props.isLk} />
                        {props.isEntrance !== false ? (
                            <User
                                user={props.user}
                                isBusiness={props.isBusiness}
                                isLogin={props.isLogin}
                                isLk={props.isLk}
                                card={props.card}
                                alert={props.alert}
                                removeAlert={props.removeAlert}
                                routeLk={props.routeLk}
                                switchTheme={props.switchTheme}
                                theme={props.theme}
                            />
                        ) : null}

                        <div
                            onClick={() => setBurger(!burger)}
                            className={
                                burger
                                    ? `${style.burger}`
                                    : `${style.burger} ${style.open}`
                            }
                        >
                            <span></span>
                        </div>
                    </div>
                    {props.isLk ? (
                        <div
                            className={
                                burger
                                    ? `${style.item}`
                                    : `${style.item} ${style.wrapperOpen}`
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
    } else {
        return (
            <header
                className={
                    scroll
                        ? `${style.header} ${style.scroll}`
                        : `${style.header}`
                }
            >
                <div className={style.container}>
                    <div className={style.block}>
                        <Logo logo={props.header.route.logo} />
                        <Drawer
                            visible={burger}
                            closable={false}
                            onClose={onClose}
                            bodyStyle={{ padding: "0px" }}
                        >
                            <div className={style.mobileBlock}>
                                {props.isEntrance !== false ? (
                                    <User
                                        user={props.user}
                                        isLogin={props.isLogin}
                                        SetLk={props.SetLk}
                                        isLk={props.isLk}
                                        card={props.card}
                                        alert={props.alert}
                                        removeAlert={props.removeAlert}
                                        routeLk={props.routeLk}
                                        switchTheme={props.switchTheme}
                                        theme={props.theme}
                                    />
                                ) : null}
                                <Nav isLk={props.isLk} />
                                {props.isLk ? (
                                    <div className={style.item}>
                                        {scrollBtn}
                                    </div>
                                ) : (
                                    <div className={style.item}>{linkBtn}</div>
                                )}
                            </div>
                        </Drawer>

                        <div
                            onClick={() => setBurger(!burger)}
                            className={
                                burger
                                    ? `${style.burger} ${style.open}`
                                    : `${style.burger} `
                            }
                        >
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
};

export default Header;
