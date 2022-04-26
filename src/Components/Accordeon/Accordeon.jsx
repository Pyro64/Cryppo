import { React, useState } from "react";
import { CSSTransition } from 'react-transition-group';
import style from './Accordeon.module.scss'
export default function Accordeon(props) {
    const [open, setOpen] = useState(false);
    const classNames = {
        appear: `${style.hover}`,
        appearActive: 'my-active-appear',
        appearDone: 'my-done-appear',
        enter: `${style.hoverEnter}`,
        enterActive: 'my-active-enter',
        enterDone: `${style.hoverEnterDone}`,
        exit: `${style.hoverExit}`,
        exitActive: 'my-active-exit',
        exitDone: `${style.hoverExitDone}`,
    }
    return (
        <CSSTransition
            in={open}
            classNames={{ ...classNames }}
        >
            <div className={open ? `${style.container} ${style.open}` : `${style.container}`}>
                <div className={style.block} onClick={() => setOpen(!open)}>
                    <div>{props.title}</div>
                    <div className={style.dropdown}></div>
                </div>
                <div className={style.content}>{props.text} </div>
            </div>
        </CSSTransition>

    )
}
