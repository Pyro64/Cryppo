import React from 'react'
 import style from './FooterMail.module.scss'

 const FooterMail =(props)=>{
return (
    <a href={`mailto:${props.text}`} className={style.text}>{props.text}</a>
)


 }
 export default FooterMail;