import React, { useEffect, useState} from "react";
import Logo from "../Logo/Logo";
import FooterMail from "../FooterMail/FooterMail";
import FooterSocial from "../FooterSocial/FooterSocial";
import style from './/Footer.module.scss'

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


  return (
      <div className={style.footer}>
           <div className={style.footerItem}>
              <div className={style.logo}>
                <Logo img={props.logo} bussiness={props.bussiness} index={props.index} cryppo={props.cryppo} />
                <div className={style.posothialWrapper}>
                <div className={style.posothialText}>PRIVACY POLICY</div>
                <div className={style.posothialText}>TERMS OF USE</div>
                </div>

              </div>
              <div className={style.mail}>
              {elementItem} 
              </div>
              <div className={style.social}>
                <div className={style.number}>Телефон для связи:8 800 888-88-88</div>
                <div className={style.iconContainer}>{elementIcon}</div>
              </div>
              </div>
           <div className={style.footerItem}></div>
          <div className={style.footerItem}></div>
           <div className={style.footerItem}></div>
  
</div>
    
   
    
    
  )
}
export default Footer;
