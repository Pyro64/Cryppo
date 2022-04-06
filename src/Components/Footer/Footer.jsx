import React, { useEffect, useState} from "react";
import Logo from "../Logo/Logo";
import FooterMail from "../FooterMail/FooterMail";
import FooterSocial from "../FooterSocial/FooterSocial";
import FooterPhone from "../FooterPhone/FooterPhone";
import style from './Footer.module.scss'

const Footer = (props) => {
    let elementItem = props.mail.map(e =>
        <FooterMail
            id={e.id}
            key={e.id}
            text={e.text}
        />
    )
    let elementIcon = props.icon.map(e =>
      <FooterSocial
          id={e.id}
          key={e.id}
          icon={e.icon}
          href={e.href}
      />
  )
  let elementPhone = props.phone.map(e =>
    <FooterPhone
        id={e.id}
        key={e.id}
        phone={e.phone}
    />
)


  return (
      <div className={style.footer}>
           <div className={style.footerItem}>
              <div className={style.logo}>
                <Logo img={props.logo} bussiness={props.bussiness} index={props.index} cryppo={props.cryppo} />
                <div className={style.posothialWrapper}>
                <a href="#" className={style.posothialText}>PRIVACY POLICY</a>
                <a href="#" className={style.posothialText}>TERMS OF USE</a>
                </div>

              </div>

              {elementItem} 
              <div className={style.social}>
                <div className={style.number}>Телефон для связи:</div>
                <div className={style.phone}>{elementPhone}</div>
                <div className={style.iconContainer}>{elementIcon}</div>
              </div>
              </div>
</div>
  )
}
export default Footer;
