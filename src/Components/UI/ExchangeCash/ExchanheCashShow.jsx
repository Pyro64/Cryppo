import React from "react";
import style from "./ExchangeCash.module.scss";
import Btn from "./../Btn/Btn";
import { notification } from "antd";
export default function ExchangeCashShow(props) {
  const cashNotification = (type) => {
    notification[type]({
      message: props.message,
      description: props.description,
    });
  };
  return (
    <div className={style.bottom}>
      <p>{props.title}</p>
      <p>{props.value}</p>
      <Btn onClick={() => cashNotification("success")}>{props.btn}</Btn>
    </div>
  );
}
