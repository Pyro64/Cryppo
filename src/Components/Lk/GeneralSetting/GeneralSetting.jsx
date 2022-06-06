import React from 'react'
import style from "./GeneralSetting.module.scss"
import MailPasswordSetting from './MailPasswordSetting'
import WalletSetting from './WalletSetting'
export default function GeneralSetting(props) {
  return (
    <div className={style.flex}>
     <div className={style.item}>
     <WalletSetting setting={props.setting}/>
     </div>
     <div className={style.item}>
     <MailPasswordSetting currencyList={props.currencyList} user={props.user} langOption={props.langOption}/>
     </div>
    </div>
  )
}
