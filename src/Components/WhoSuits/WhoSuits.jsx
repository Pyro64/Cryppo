import React from 'react'
import style from './WhoSuits.module.scss'
import WhoSuitsItem from './WhoSuitsItem'
import image from '../../Images/content/1.png'
export default function WhoSuits(props) {
    let elementItem = props.whoSuits.map(e =>
        <WhoSuitsItem
            id={e.id}
            key={e.id}
            title={e.title}
            text={e.text}
        />
    )
    return (
        <div className={style.block}>
            {elementItem}
            <img src={image} alt="image" />
        </div>
    )
}
