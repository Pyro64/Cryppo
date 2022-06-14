import React from "react";
import NotifocathionItem from "./NotificationItem";
import style from "./Notification.module.scss";

import SubtitleLk from "../../UI/SubtitleLk/SubtitleLk";
export default function Notification(props) {
  let notification = props.settingOption.map((e) => (
    <NotifocathionItem id={e.id} key={e.id} name={e.name} />
  ));

  return (
    <div className="main container">
      <SubtitleLk subtitle="Уведомление" />
      <div className={style.content}>
        <div className={style.title}>Мгновенные уведомления</div>
        <div className={style.text}>
          Выберите, какие уведомления вы хотите получать и куда (Email,
          Telegram, Телефон). Каждый раз, когда произойдет выбранное событие,
          вам будет отправлено сообщение.
        </div>
        {notification}
      </div>
    </div>
  );
}
