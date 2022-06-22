import React, { useState } from "react";
import style from "../BusinessLkTerminal.module.scss";
import MyModal from "../../../UI/MyModal/MyModal";
import LkInput from "../../../UI/LkInput/LkInput";
import close from "../../../../Images/icon/close.svg";
import { Input, notification } from "antd";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
export default function BusinessLkTerminalAdd(props) {
  const [open, setOpen] = useState(false);
  function modal() {
    setOpen(!open);
  }
  const openNotification = (e) => {
    e.preventDefault();
    setOpen(!open);

    notification.open({
      type: "success",
      message: "Терминал успешно создан",
    });
  };
  return (
    <div>
      <div className={style.add} onClick={modal}>
        Добавить новый терминал
      </div>
      <MyModal open={open} setOpen={setOpen}>
        <form className={style.container}>
          <img
            alt="close"
            className={style.close}
            src={close}
            onClick={modal}
          />
          <div className={style.title}>Доавление нового терминала</div>
          <div className={style.subtitle}>Введите имя терминала</div>
          <LkInput placeholder="Введите имя терминала" />
          <div className={style.subtitle}>Введите логин терминала</div>
          <LkInput placeholder="Введите логин" />
          <div className={style.subtitle}>Введите пароль терминала</div>
          <Input.Password
            placeholder="Введите пароль"
            className={style.input}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Input.Password
            placeholder="Повторите пароль"
            className={style.input}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <button onClick={openNotification} className={style.btn}>
            Готово
          </button>
        </form>
      </MyModal>
    </div>
  );
}
