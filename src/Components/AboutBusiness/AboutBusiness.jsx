import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import style from './AboutBusiness.module.scss'
import AboutBusinessItem from './AboutBusinessItem'

export default function AboutBusiness(props) {
    let elementItem = props.about.map(e =>
        <AboutBusinessItem
            id={e.id}
            key={e.id}
            title={e.title}
            text={e.text}
        />
    )
    return (
        <div className={style.block}>
            {elementItem}
            <Parallax className={style.parallax} translateX={[200, -200,]} />
        </div>
    )
}