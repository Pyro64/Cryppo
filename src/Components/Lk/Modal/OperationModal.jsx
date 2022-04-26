import React from "react";
import ReactModal from "react-modal";
import style from "./Modal.module.scss";

export default function OperationModal(props) {
  const handleCloseModal = () => {
    props.switchModal(!props.isModal);
  };

  return (
    <div className="modal">
      <ReactModal
        className={style.modalWrapper}
        isOpen={props.isModal}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        closeTimeoutMS={380}
      >
        <div className={style.container}>
          <div className={style.header}>
            <div className={style.dataPay}>{props.operationModal.data}</div>
            <div className={style.close} onClick={handleCloseModal}></div>
          </div>

          <div className={style.wrapper}>
            <img
              src={props.operationModal.icon}
              className={style.icon}
              alt="img"
            ></img>
            <div className={style.firm}>{props.operationModal.firm}</div>
            <div className={style.type}>{props.operationModal.type}</div>
            <div className={style.cash}>
              {props.operationModal.cash} {props.operationModal.currencyPay}
            </div>
            <div className={style.status}>
              <div
                style={{ background: `${props.operationModal.status.color}` }}
                className={style.iconStatus}
              ></div>
              <div className={style.textStatus}>
                {props.operationModal.status.text}
              </div>
            </div>
            <div className={style.current}>
              <div className={style.crypto}>
                <img
                  src={props.operationModal.iconPay}
                  className={style.cryptoIcon}
                  alt="img"
                ></img>
                <div className={style.currencyPay}>
                  {props.operationModal.currencyPay}
                </div>
              </div>
              <div className={style.check}>{props.operationModal.check}</div>
            </div>
            <div className={style.card}>
              <div className={style.last}>
                <div className={style.drop} />
                <div className={style.bankText}>Банковские карты</div>
              </div>
              <div
                style={{
                  background: `${props.operationModal.bankCardData.color}`,
                }}
                className={style.cardLine}
              >
                <div className={style.number}>
                  {props.operationModal.bankCardData.number}
                </div>
                <img
                  src={props.operationModal.bankCardData.logo}
                  className={style.logo}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}
