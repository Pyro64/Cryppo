import React, { useState } from "react";
import style from './Accordeon.module.scss'




export default function Accordeon(props) {

const [open, setOpen] = useState(true);
const openedAccordeon = () => {
    setOpen(!open);
};
    return (
        <div className={open? `${style.container}`:` ${style.container} ${style.containerOpen} `}>
            <div onClick={openedAccordeon} className={style.block}>
            <div className={style.title}>{props.title}</div>
            <div className={open? `${style.dropdown}`:` ${style.dropdown} ${style.dropdownOpen} `}></div>
            </div>
            <div className={ open? `${style.content}`:` ${style.contentOpen} ${style.content} ` }>{ props.text }</div></div>
        
       

    );
}
