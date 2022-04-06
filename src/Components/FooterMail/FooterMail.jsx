import React from 'react'
 import style from './FooterMail.module.scss'

 const FooterMail =(props)=>{
return (
    <div className={style.text}>{props.text}</div>
)


 }
 export default FooterMail;