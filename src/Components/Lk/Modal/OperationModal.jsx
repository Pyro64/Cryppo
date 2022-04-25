import React from "react";
import ReactModal from "react-modal";
import style from "./Modal.module.scss";

export default function OperationModal(props) {
  debugger;
  return (
    <div className="modal">
      <ReactModal className={style.container} isOpen={props.isModal}>
        <div className={style.dataPay}>{props.operationModal.data}</div>
        <div className={style.wrapper}>
          <img src={props.operationModal.icon} className={style.icon}></img>
          <div className={style.firm}>{props.operationModal.firm}</div>
          <div className={style.type}>{props.operationModal.type}</div>
          <div className={style.cash}>
            {props.operationModal.cash} {props.operationModal.currencyPay}
          </div>
          <div className={style.status}>
            <div className={style.iconStatus}></div>
            <div className={style.textStatus}>Операция в разработке</div>
          </div>
          <div className={style.current}>
            <div className={style.crypto}>
              <img
                src={props.operationModal.iconPay}
                className={style.cryptoIcon}
              ></img>
              <div className={style.currencyPay}>
                {props.operationModal.currencyPay}
              </div>
            </div>
            <div className={style.check}>{props.operationModal.check}</div>
          </div>
          <div className={style.last}>
            <div className={style.drop} />
            <div className={style.bankText}>Банковские карты</div>
          </div>
          <div className={style.cardLine}></div>
        </div>
      </ReactModal>
    </div>
  );
}
