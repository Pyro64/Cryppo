import React, { useState } from "react";
import style from "./ExchangeCash.module.scss";
import Btn from "./../Btn/Btn";
import { notification } from "antd";
import MyModal from "../../UI/MyModal/MyModal";
export default function ExchangeCashShow(props) {
  const [open, setOpen] = useState(false);
  function openModal(type) {
    setOpen(!open);
    notification[type]({
      message: props.message,
      description: props.description,
    });
    debugger;
  }
  return (
    <div>
      <Btn onClick={() => openModal("success")}>{props.btn}</Btn>
      <MyModal setOpen={setOpen} open={open}>
        {props.value1}
        {props.value2}
      </MyModal>
    </div>
  );
}
