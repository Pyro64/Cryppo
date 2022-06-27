import React from "react";
import style from "./Check.module.scss";
export default function CheckItem(props) {
    return (
        <div className={style.line}>
            <div className={style.wrapper}>
                <div className={style.valute}>
                    <img src={props.icon} className={style.icon} />
                    <div className={style.text}>{props.name}</div>
                </div>

                <div className={style.column}>
                    <div className={style.availability}>{props.amount}</div>
                    <div className={style.prise}>
                        {props.amountInViewCurrency}
                    </div>
                </div>
            </div>
        </div>
    );
}
