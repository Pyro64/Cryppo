import React from 'react'
import Accordeon from '../../../../Accordeon/Accordeon'
import Subtitle from '../../../../Subtitle/Subtitle'
import style from './FaqBusiness.module.scss'
export default function FaqBusiness(props) {
    let elementItem = props.faq.map(e =>
        <Accordeon
            id={e.id}
            key={e.id}
            title={e.title}
            text={e.text}
        />
    )
    return (
        <div id="faq" className={style.container}>
            <div className={style.wrapper}>
                <Subtitle subtitle="Часто задаваемые вопросы" gradient="." />
            </div>
            {elementItem}
        </div>
    )
}
