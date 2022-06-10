import React from "react";
import style from "./Security.module.scss";

export default function AddressItem(props) {
    return (
        <div className={style.line}>
            <div className={style.itemMax}>{props.date}</div>
            <div className={style.item}>{props.ip}</div>
            <div className={style.item}>{props.deviceOs}</div>
            <div
                className={style.close}
                onClick={() => {
                    props.DeleteDevicePostTC(props.deviceId);
                }}
            ></div>
        </div>
    );
}
