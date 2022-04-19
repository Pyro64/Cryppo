import React from 'react'
import SubtitleLk from '../SubtitleLk/SubtitleLk'
import style from "./News.module.scss";
import NewsSlider from './NewsSlider';
export default function News(props) {
    return (
        <div className={style.container}>
            <SubtitleLk subtitle="Для вас" />
            <NewsSlider news={props.news} />
        </div>
    )
}
