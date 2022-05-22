import React,{useState} from 'react'
import style from "./GeneralSetting.module.scss"

export default function WalletSettingItem(props) {
    const [togglez, setToggle] = useState(false);
    function test() {
      setToggle(!togglez)
      console.log(togglez)
    }
    return (
    <div className={style.line} >
    <input type="checkbox" className={style.input} id={props.id}/>
    <label onClick={test} className={ style.label} htmlFor={props.id}>
      <div className={style.labelItem}>
        <img className={style.labelImg} alt='icon' src={props.icon}/>
        <div className={style.labelText}>{props.name}</div>
      </div>
      <div className={ togglez? `${style.labelCheck}`:`${style.labelCheck} ${style.check}`}></div>
    </label>
    </div>
  )
}