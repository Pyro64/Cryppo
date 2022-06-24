import React, { useState } from "react";
import style from "../BusinessLkTerminal.module.scss";
import MyModal from "../../../UI/MyModal/MyModal";
import LkInput from "../../../UI/LkInput/LkInput";
import close from "../../../../Images/icon/close.svg";
import { notification } from "antd";

export default function BusinessLkTerminalName(props) {
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
    setOpen(!open);
  };
  return (
    <div>
      <div className={style.link} onClick={modal}>
        Изменить имя терминала
      </div>
      <MyModal open={open} setOpen={setOpen}>
        <form className={style.container}>
          <img
            alt="close"
            className={style.close}
            src={close}
            onClick={modal}
          />
          <div className={style.title}>Изменение имени</div>
          <div className={style.subtitle}>Введите новое имя терминала</div>
          <LkInput />
          <button onClick={openNotification} className={style.btn}>
            Готово
          </button>
        </form>
      </MyModal>
    </div>
  );
}