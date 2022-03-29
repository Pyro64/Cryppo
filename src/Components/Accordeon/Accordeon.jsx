import { React, useState } from "react";
import style from './Accordeon.module.scss'
export default function Accordeon(props) {
    const [open, setOpen] = useState(false);
    let toggleHandler = (e) => {
        setOpen(!open);
    };
    return (
        <div className={open ? `${style.container} ${style.open}` : `${style.container}`}>

            <div className={style.block} onClick={toggleHandler}>
                <div>{props.title}</div>
                <div className={style.dropdown}></div>
            </div>
            <div className={style.content}>{props.text} </div>
        </div>
    )
}
