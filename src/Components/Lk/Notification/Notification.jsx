import NotifocathionItem from "./NotificationItem";
import style from "./Notification.module.scss";
import { useState } from "react";
export default function Notification(props) {
    let id = 0;
    const [notificationsSettings, setNotificationsSettings] = useState(
        props.notificationsSettings
    );
    let notification = [
        <NotifocathionItem
            id={id++}
            key={id++}
            email={notificationsSettings.systemEmail}
            telegram={notificationsSettings.systemTg}
            text="Системные уведомления"
            setNotificationsSettings={setNotificationsSettings}
        />,
        <NotifocathionItem
            id={id++}
            key={id++}
            email={notificationsSettings.entryEmail}
            telegram={notificationsSettings.entryTg}
            text="Успешный вход"
            setNotificationsSettings={setNotificationsSettings}
        />,
        <NotifocathionItem
            id={id++}
            key={id++}
            email={notificationsSettings.failEntryEmail}
            telegram={notificationsSettings.failEntryTg}
            text="Неуспешный вход"
            setNotificationsSettings={setNotificationsSettings}
        />,
        <NotifocathionItem
            id={id++}
            key={id++}
            email={notificationsSettings.paymentGetEmail}
            telegram={notificationsSettings.paymentGetTg}
            text="Получен платеж"
            setNotificationsSettings={setNotificationsSettings}
        />,
        <NotifocathionItem
            id={id++}
            key={id++}
            email={notificationsSettings.paymentConfirmedEmail}
            telegram={notificationsSettings.paymentConfirmedTg}
            text="Отправлен платеж"
            setNotificationsSettings={setNotificationsSettings}
        />,
        <NotifocathionItem
            id={id++}
            key={id++}
            email={notificationsSettings.passwordChangeEmail}
            telegram={notificationsSettings.passwordChangeTg}
            text="Изменен пароль"
            setNotificationsSettings={setNotificationsSettings}
        />,
        <NotifocathionItem
            id={id++}
            key={id++}
            email={notificationsSettings.notificationsChangeEmail}
            telegram={notificationsSettings.notificationsChangeTg}
            text="Изменены уведомления"
            setNotificationsSettings={setNotificationsSettings}
        />,
    ];

    return (
        <div className="main container">
            <div className={style.content}>
                <div className={style.title}>Мгновенные уведомления</div>
                <div className={style.text}>
                    Выберите, какие уведомления вы хотите получать и куда
                    (Email, Telegram, Телефон). Каждый раз, когда произойдет
                    выбранное событие, вам будет отправлено сообщение.
                </div>
                {notification}
                <button
                    onClick={() => {
                        console.log(props);
                        props.SendNotificationsPostTC();
                    }}
                    className={style.btn}
                >
                    Сохранить
                </button>
            </div>
        </div>
    );
}
