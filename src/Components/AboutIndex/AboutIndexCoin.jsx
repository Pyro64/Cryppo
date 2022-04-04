import React from 'react'
import AboutIndexCoinItem from './AboutIndexCoinItem'
import style from './AboutIndex.module.scss'
export default function AboutIndexCoin(props) {
    let coinItem = props.coin.map(e =>
        <AboutIndexCoinItem
            id={e.id}
            img={e.img}
            title={e.title}
            number={e.number}
            key={e.id}
        />
    )
    return (
        <div className={style.coin}>
            {coinItem}
        </div>
    )
}
