import React, { useId } from "react";
import NotifocathionItem from "./NotificationItem";
import style from "./Notification.module.scss";

import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
export default function Notification(props) {
    let notification = [
        <NotifocathionItem
            id={useId}
            email={props.notificationsSettings.systemEmail}
            telegram={props.notificationsSettings.systemTg}
            text="Системные уведомления"
        />,
        <NotifocathionItem
            id={useId}
            key={useId}
            email={props.notificationsSettings.entryEmail}
            telegram={props.notificationsSettings.entryTg}
            text="Успешный вход"
        />,
        <NotifocathionItem
            id={useId}
            key={useId}
            email={props.notificationsSettings.failEntryEmail}
            telegram={props.notificationsSettings.failEntryTg}
            text="Неуспешный вход"
        />,
        <NotifocathionItem
            id={useId}
            key={useId}
            email={props.notificationsSettings.paymentGetEmail}
            telegram={props.notificationsSettings.paymentGetTg}
            text="Получен платеж"
        />,
        <NotifocathionItem
            id={useId}
            key={useId}
            email={props.notificationsSettings.paymentConfirmedEmail}
            telegram={props.notificationsSettings.paymentConfirmedTg}
            text="Отправлен платеж"
        />,
        <NotifocathionItem
            id={useId}
            key={useId}
            email={props.notificationsSettings.passwordChangeEmail}
            telegram={props.notificationsSettings.passwordChangeTg}
            text="Изменен пароль"
        />,
        <NotifocathionItem
            id={useId}
            key={useId}
            email={props.notificationsSettings.notificationsChangeEmail}
            telegram={props.notificationsSettings.notificationsChangeTg}
            text="Изменены уведомления"
        />,
    ];

    return (
        <div className={style.content}>
            <div className={style.title}>Мгновенные уведомления</div>
            <div className={style.text}>
                Выберите, какие уведомления вы хотите получать и куда (Email,
                Telegram, Телефон). Каждый раз, когда произойдет выбранное
                событие, вам будет отправлено сообщение.
            </div>
            {notification}
            <button onClick></button>
        </div>
    );
}
