import React, { useEffect, useState } from "react";
import style from "./BussinesAuthorization.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import LkInput from "../../UI/LkInput/LkInput";

const BussinesAuthorization = (props) => {
  const navigate = useNavigate();
  const [emailName, setEmailName] = useState("");
  const [passwordName, setPasswordName] = useState("");
  const value = true;
  if(props.isLogin)
  {
    navigate("/business/lk");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginThunkCreator(emailName, passwordName, value);
  };
  return (
    <div className="main">
      <div className={style.entance}>
        <form className={style.modal} onSubmit={handleSubmit}>
          <div className={style.title}>Авторизация</div>
          <LkInput
            title="Email"
            type="text"
            value={emailName}
            className={style.input}
            name="email"
            onChange={(e) => setEmailName(e.target.value)}
          />
          <LkInput
            onChange={(e) => setPasswordName(e.target.value)}
            title="Пароль"
            className={style.input}

            type="text"
            value={passwordName}
            name="password"
          />
          <button className={style.button} type="submit">
            Авторизоваться
          </button>
          <NavLink to="/business/registry" className={style.link}>Зарегистрироваться?</NavLink>
        </form>
      </div>
    </div>
  );
};

export default BussinesAuthorization;
