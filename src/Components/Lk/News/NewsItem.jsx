import React from 'react'
import style from "./News.module.scss";
export default function NewsItem(props) {
    return (
        <div className={style.item}>
            <div className={style.inner}>
                <img src={props.img} alt="background" />
                <p>{props.text}</p>
            </div>

        </div>
    )
}
