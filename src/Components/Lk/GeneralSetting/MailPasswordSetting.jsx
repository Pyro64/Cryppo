import React from 'react'
import MySelect from '../../UI/MySelect/MySelect'
import style from "./GeneralSetting.module.scss"
import MailSetting from './MailSetting'
export default function MailPasswordSetting(props) {
  return (
    <div className={style.content}> 
     <div className={style.title}>Почта и пароль</div>
     <MailSetting/>
     <div className={style.title}>Валюта баланса</div>
     <div className={style.subtitle}>Вы можете выбрать в какой валюте отображать общую стоимость ваших криптовалют на балансе, а также стоимость портфеля.</div>
     
    </div>
  )
}
