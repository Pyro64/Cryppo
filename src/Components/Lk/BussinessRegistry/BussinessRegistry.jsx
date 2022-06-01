import React, { useState } from "react";
import style from "./BussinessRegistry.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import LkInput from "../../UI/LkInput/LkInput";

const BussinessRegistry = (props) => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [emailName, setEmailName] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [passwordName, setPasswordName] = useState("");
  const [repeatPasswordName, setRepeatPasswordName] = useState("");
  const value = true;
  if (props.isLogin) {
    navigate("/business/lk");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.registryThunkCreator(
      companyName,
      emailName,
      name,
      surname,
      passwordName,
      repeatPasswordName,
      value
    );
  };

  return (
    <div className="main">
      <div className={style.entance}>
        <Tabs className={style.tabs}>
          <TabList className={style.list}>
            <Tab className={style.tab} selectedClassName={style.activeTab}>
              <div>Персональный</div>
            </Tab>
            <Tab className={style.tab} selectedClassName={style.activeTab}>
              <div>Компания</div>
            </Tab>
          </TabList>
          <TabPanel>
            <form className={style.modal} onSubmit={handleSubmit}>
              <LkInput
                className={style.input}
                placeholder="Ваше имя"
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <LkInput
                className={style.input}
                placeholder="Ваша фамилия"
                type="text"
                value={surname}
                name="surname"
                onChange={(e) => setSurname(e.target.value)}
              />
              <LkInput
                className={style.input}
                placeholder="Email"
                type="text"
                value={emailName}
                name="email"
                onChange={(e) => setEmailName(e.target.value)}
              />
              <LkInput
                className={style.input}
                placeholder="Введите пароль"
                type="text"
                value={passwordName}
                name="password"
                onChange={(e) => setPasswordName(e.target.value)}
              />
              <LkInput
                className={style.input}
                placeholder="Повторите пароль"
                type="text"
                value={repeatPasswordName}
                name="email"
                onChange={(e) => setRepeatPasswordName(e.target.value)}
              />

              <button className={style.button} type="submit">
                Зарегистрироваться
              </button>
            </form>
          </TabPanel>
          <TabPanel>
            <form className={style.modal} onSubmit={handleSubmit}>
              <LkInput
                className={style.input}
                placeholder="Название компании"
                type="text"
                value={companyName}
                name="company"
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <LkInput
                className={style.input}
                placeholder="Ваше имя"
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <LkInput
                className={style.input}
                placeholder="Ваша фамилия"
                type="text"
                value={surname}
                name="surname"
                onChange={(e) => setSurname(e.target.value)}
              />
              <LkInput
                className={style.input}
                placeholder="Email"
                type="text"
                value={emailName}
                name="email"
                onChange={(e) => setEmailName(e.target.value)}
              />
              <LkInput
                className={style.input}
                placeholder="Введите пароль"
                type="text"
                value={passwordName}
                name="password"
                onChange={(e) => setPasswordName(e.target.value)}
              />
              <LkInput
                className={style.input}
                placeholder="Повторите пароль"
                type="text"
                value={repeatPasswordName}
                name="email"
                onChange={(e) => setRepeatPasswordName(e.target.value)}
              />

              <button className={style.button} type="submit">
                Зарегистрироваться
              </button>
            </form>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BussinessRegistry;
