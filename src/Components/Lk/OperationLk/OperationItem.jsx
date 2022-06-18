import React from "react";
import style from "./Operation.module.scss";
export default function OperationItem(props) {
    let value = props;
    // let isModal = !props.isModal;
    // const a = () => {
    //   props.setModal(value);
    //   props.switchModal(isModal);
    // };
    function switchModal() {
        props.openModal(!props.modal);
        props.setModal(value);
    }
    return (
        <div className={style.line} onClick={switchModal}>
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
                        props.status
                            ? `${style.accept} ${style.false}`
                            : `${style.accept}`
                    }
                />
            </div>

            <div className={style.cash}>
                {props.amount} <img src={props.iconPay} alt="currency icon" />{" "}
                {props.currency}
            </div>
        </div>
    );
}
