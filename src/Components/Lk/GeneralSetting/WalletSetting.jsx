import React from 'react'
import style from "./GeneralSetting.module.scss"
import WalletSettingItem from './WalletSettingItem'

export default function WalletSetting(props) {
    let cryptoItem = props.setting.map((e) => (
        <WalletSettingItem
        id={e.id}
        key={e.id}
        icon={e.icon}
        name={e.name}
        value={e.value}
        />
        
        
    ))
  return (
    <div className={style.content}>
        <div className={style.title}>Управление кошельками</div>
        <div className={style.subtitle}>Выберите, какие кошельки следует 
        показывать в разделе “Балансы”.</div>
        <div className={style.table}>{cryptoItem}</div>
    </div>
  )
}

