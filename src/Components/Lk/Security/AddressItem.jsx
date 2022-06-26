import React from "react";
import { userSlice } from "../../../Redux/user-reducer";
import style from "./Security.module.scss";
import { useDispatch } from "react-redux";

export default function AddressItem(props) {
    const dispatch = useDispatch();
    return (
        <div className={style.line}>
            <div className={style.itemMax}>
                {new Date(props.date).toLocaleString()}
            </div>
            <div className={style.item}>{props.ip}</div>
            <div className={style.item}>{props.location}</div>
            <div
                className={style.close}
                onClick={() => {
                    //props.DeleteDevicePostTC(props.deviceId);
                    dispatch(userSlice.actions.DeleteDevice(props.date));
                }}
            ></div>
        </div>
    );
}
