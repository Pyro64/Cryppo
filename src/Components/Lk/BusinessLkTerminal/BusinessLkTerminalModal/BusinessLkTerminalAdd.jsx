import React, { useState } from "react";
import style from "../BusinessLkTerminal.module.scss";
import MyModal from "../../../UI/MyModal/MyModal";
import LkInput from "../../../UI/LkInput/LkInput";
import close from "../../../../Images/icon/close.svg";
import { notification } from "antd";
export default function BusinessLkTerminalAdd(props) {
  const [open, setOpen] = useState(false);
  function modal() {
    setOpen(!open);
  }
  const [code, setCode] = useState(true);
  const openNotification = (e) => {
    e.preventDefault();
    notification.open({
      type: "success",
      message: "Успешно",
    });
    setCode(!code);
  };
  return (
    <div>
      <div className={style.add} onClick={modal}>
        Изменить логин терминала
      </div>
      <MyModal open={open} setOpen={setOpen}>
        <form className={style.container}>
          <img
            alt="close"
            className={style.close}
            src={close}
            onClick={modal}
          />
          <div className={style.title}>Изменения логина</div>
          <div className={style.subtitle}>Введите новый логин терминала</div>
          <LkInput />
          <button onClick={openNotification} className={style.btn}>
            Готово
          </button>
        </form>
      </MyModal>
    </div>
  );
}
