import React, { useState } from "react";
import style from "./Operation.module.scss";
import yandex from "../../../Images/icon/yandex.svg";
import OperationModal from "./OperationModal";
import MyModal from "../../UI/MyModal/MyModal";
export default function OperationItem(props) {
  let value = props;

  function switchModal() {
    props.openModal(!props.modal);
    props.setModal(value);
  }
  const [open, setOpen] = useState(false);
  function openModal() {
    setOpen(!open);
  }
  return (
    <div className={style.line} onClick={openModal}>
      <div className={style.flex}>
        <img src={props.icon} className={style.icon} alt="icon" />
        <div className={style.wrapper}>
          <div>
            <div className={style.type}>{props.type}</div>
            <div className={style.subtitle}>{props.title}</div>
            <div className={style.check}>{props.check}</div>
          </div>
          <div
            className={style.status}
            style={{ background: `${props.status.color}` }}
          ></div>
        </div>
        <div
          className={
            props.status ? `${style.accept} ${style.false}` : `${style.accept}`
          }
        />
      </div>

      <div className={style.cash}>
        {props.amount} {props.currency}
      </div>
      <div className={style.none}>
        <MyModal setOpen={setOpen} open={open}>
          <OperationModal
            open={open}
            openModal={openModal}
            id={props.id}
            key={props.id}
            type={props.type ?? "Покупка"}
            icon={props.icon ?? yandex}
            date={props.date}
            currency={props.currency}
            title={props.title ?? "Яндекс Такси"}
            check={props.check}
            status={props.status}
            amount={props.amount}
            firm={props.firm}
            address={props.address}
            bankCardData={props.bankCardData}
          />
        </MyModal>
      </div>
    </div>
  );
}
