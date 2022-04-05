
import style from '../Header/Header.module.scss'
import React, { useEffect } from "react";
import { useLocation } from "react-router";
export default function Logo(props) {
    let thisLocation = useLocation();
    let value = thisLocation.pathname
    useEffect(() => {
        switch (value) {
            case '/business':
                props.bussiness()
                break
            case '/cryppoindex':
                props.index()
                break
            default:
                props.cryppo()
                break
        }
    }, [value]);
    return (
        <img className={style.logo} src={props.img} />
    )
}
