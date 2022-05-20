import React, { useState } from "react";
import style from "./BussinessRegistry.module.scss";
import { NavLink } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const BussinessRegistry = () => {
    const [emailName, setEmailName] = useState("");
    const [passwordName, setPasswordName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let email = formData.get("email");
        let password = formData.get("password");
    };

    return (
        <div className="main">
            <div className={style.entance}>
                <Tabs className={style.tabs}>
                    <TabList className={style.tabsItem}>
                        <Tab className={style.tabsText}>Персональный</Tab>
                        <Tab className={style.tabsText}>Компания</Tab>
                    </TabList>
                    <TabPanel>
                        <form className={style.modal} onSubmit={handleSubmit}>
                            <div className={style.title}>Авторизация</div>
                            <input
                                value={emailName}
                                onChange={(e) => setEmailName(e.target.value)}
                                name="email"
                                className={style.input}
                            />
                            <input
                                value={passwordName}
                                onChange={(e) =>
                                    setPasswordName(e.target.value)
                                }
                                name="password"
                                className={style.input}
                            />
                            <button className={style.button} type="submit">Авторизоваться</button>
                            <NavLink to="business/registry">Зарегистрироваться?</NavLink>
                        </form>
                    </TabPanel>
                    <TabPanel>
                        <form className={style.modal} onSubmit={handleSubmit}>
                            <div className={style.title}>Регистрация</div>
                            <input
                                value={emailName}
                                onChange={(e) => setEmailName(e.target.value)}
                                name="email"
                                className={style.input}
                            />
                            <input
                                value={passwordName}
                                onChange={(e) =>
                                    setPasswordName(e.target.value)
                                }
                                name="password"
                                className={style.input}
                            />
                            <button className={style.button} type="submit">Авторизоваться</button>
                        </form>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default BussinessRegistry;
