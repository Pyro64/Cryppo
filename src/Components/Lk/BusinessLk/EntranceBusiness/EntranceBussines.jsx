import React,{useState} from 'react';
import style from"./EntranceBussinses.module.scss";
import {NavLink} from "react-router-dom";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

const EntranceBussines = () => {
    const [emailName,setEmailName] = useState('');
    const [passwordName,setPasswordName] = useState('');



    return (
        <div className="main">
            <div className={style.entance}>
                <Tabs className={style.tabs}>
                    <TabList className={style.tabsItem}>
                        <Tab className={style.tabsText}>Авторизация</Tab>
                        <Tab className={style.tabsText}>Регистрация</Tab>
                    </TabList>
                    <TabPanel>
                        <form className={style.modal}>
                            <div className={style.title}>Авторизация</div>
                            <input value={emailName} onChange={e => setEmailName(e.target.value)}  name='email' className={style.input}   />
                            <input value={passwordName} onChange={e => setPasswordName(e.target.value)} name='password' className={style.input}  />
                            <NavLink to="lk" className="btn">Авторизоваться</NavLink>
                        </form>
                    </TabPanel>
                    <TabPanel>
                        <form className={style.modal}>
                            <div className={style.title}>Регистрация</div>
                            <input value={emailName} onChange={e => setEmailName(e.target.value)}  name='email' className={style.input}   />
                            <input value={passwordName} onChange={e => setPasswordName(e.target.value)} name='password' className={style.input}  />
                            <NavLink to="lk"  className="btn">Авторизоваться</NavLink>
                        </form>
                    </TabPanel>

                </Tabs>

            </div>
        </div>


    )
};

export default EntranceBussines;

