import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import style from "./SettingPassword.module.scss";
import MyModal from "../../UI/MyModal/MyModal";
import LkInput from "../../UI/LkInput/LkInput";
import close from "../../../Images/icon/close.svg";
import { Input, notification } from "antd";

export default function SettingPassword(props) {
  const [open, setOpen] = useState(false);
  function modal() {
    setOpen(!open);
  }
  const [code, setCode] = useState(false);
  const openNotification = (e) => {
    e.preventDefault();
    notification.open({
      type: "success",
      message: "Код отправлени на почту",
    });
    setCode(!code);
  };
  return (
    <div>
      <div className={style.linkItem} onClick={modal}>
        Сменить пароль
      </div>
      <MyModal open={open} setOpen={setOpen}>
        <form
          className={
            code ? `${style.visible} ${style.container}` : `${style.notVisible}`
          }
        >
          <img
            alt="close"
            className={style.close}
            src={close}
            onClick={modal}
          />
          <div className={style.title}>Смена пароля</div>
          <div className={style.subtitle}>
            Чтобы продолжить, введите ваш текущий пароль
          </div>
          <LkInput placeholder="Пароль" />
          <div className={style.subtitle}>Придумайте сложный пароль</div>
          <Input.Password
            className={style.input}
            placeholder="Введите пароль"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Input.Password
            className={style.input}
            placeholder="Повторите пароль"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />

          <button onClick={openNotification} className={style.btn}>
            Сохранить
          </button>
        </form>
        <form
          className={
            code ? `${style.notVisible}` : `${style.visible} ${style.container}`
          }
        >
          <img
            alt="close"
            className={style.close}
            src={close}
            onClick={modal}
          />
          <div className={style.title}>Подтверждение</div>
          <div className={style.subtitle}>Код отправлен на ваш Email</div>
          <LkInput placeholder="Введите код" />
          <button className={style.codeBtn}>Запросить код еще раз</button>
          <button className={style.btn}>Продолжить</button>
        </form>
      </MyModal>
    </div>
  );
}
