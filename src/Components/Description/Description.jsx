import React from 'react'
import style from './Description.module.scss'
import Descriptionitem from './DescriptionItem'
export default function Description(props) {
    let elementDescription = props.description.map(e =>
        <Descriptionitem
            id={e.id}
            number={e.number}
            text={e.text}
            key={e.id}
        />
    )
    return (
        <div className={style.block}>
            {elementDescription}
        </div>
    )
}
