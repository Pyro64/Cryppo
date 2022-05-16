import React from "react";
import ReactModal from "react-modal";
import style from "./Modal.module.scss";

export default function MyModal(props) {
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
                        {props.children}
                    </div>
                </div>
            </ReactModal>
        </div>
    );
}