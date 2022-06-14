import React, { useState } from "react";
import style from "./Notification.module.scss";
import { userSlice } from "../../../Redux/user-reducer";
import { useDispatch } from "react-router";

export default function NotifocathionItem(props) {
    const [valueTg, setValueTg] = useState(props.telegram);
    const [valueEmail, setValueEmail] = useState(props.email);

    return (
        <div className={style.pushContainer}>
            <div className={style.pushName}>{props.text}</div>
            <div className={style.pushItem}>
                <input
                    id={props.id}
                    type="checkbox"
                    value={valueEmail}
                    onChange={() => setValueEmail(!valueTg)}
                />
                <label className={style.pushLabel} htmlFor={props.id}>
                    <div className={style.pushText}>Email</div>
                </label>
                <input
                    id={`${props.id}`}
                    type="checkbox"
                    value={valueTg}
                    onChange={() => setValueTg(!setValueEmail)}
                />
                <label className={style.pushLabel} htmlFor={`${props.id}t`}>
                    <div className={style.pushText}>Telegram</div>
                </label>
            </div>
        </div>
    );
}
