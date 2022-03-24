import React from 'react'
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
        <div className={style.container}>
            {elementItem}
        </div>
    )
}
