import React from 'react'
import Subtitle from '../../UI/Subtitle/Subtitle'
import style from './WhoSuits.module.scss'
import WhoSuitsItem from './WhoSuitsItem'
export default function WhoSuits(props) {
    let elementItem = props.whoSuits.map(e =>
        <WhoSuitsItem
            id={e.id}
            key={e.id}
            title={e.title}
            text={e.text}
            img={e.img}
        />
    )
    return (
        <div id="about" className={style.container}>
            <Subtitle modify={{ textAlign: 'center' }} subtitle="Кому подойдёт CRYPPO Business" gradient="?" />
            <div className={style.flex}>
                {elementItem}
            </div>
        </div>
    )
}
