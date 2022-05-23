import React from "react";
import LkInput from "../../UI/LkInput/LkInput";
import MySelect from "../../UI/MySelect/MySelect";
import style from "./Check.module.scss";
export default function CheckModal(props) {
  return (
    <div className={style.modalWrapper}>
      <LkInput title="Логин пользователя" />
      <MySelect title="Выберите валюту" cashOption={props.cashOption} />
      <LkInput title="Комментарий" />
    </div>
  );
}
