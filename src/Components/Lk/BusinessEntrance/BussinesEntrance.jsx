import React, { useState } from "react";
import style from "./BussinsesEntrance.module.scss";
import { NavLink } from "react-router-dom";
import LkInput from "../../UI/LkInput/LkInput";

const BussinesEntrance = () => {
  const [emailName, setEmailName] = useState("");
  const [passwordName, setPasswordName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");
    let password = formData.get("password");
  };
  console.log(emailName, passwordName);
  return (
    <div className="main">
      <div className={style.entance}>
        <form className={style.modal} onSubmit={handleSubmit}>
          <div className={style.title}>Авторизация</div>
          <LkInput
            title="Email"
            type="text"
            value={emailName}
            name="email"
            onChange={(e) => setEmailName(e.target.value)}
          />
          <LkInput
            onChange={(e) => setPasswordName(e.target.value)}
            title="Пароль"
            type="text"
            value={passwordName}
            name="password"
          />
          <button className={style.button} type="submit">
            Авторизоваться
          </button>
          <NavLink to="business/registry">Зарегистрироваться?</NavLink>
        </form>
      </div>
    </div>
  );
};

export default BussinesEntrance;
