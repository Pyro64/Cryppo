import React from 'react'
import Description from '../Description/Description'
import Subtitle from '../Subtitle/Subtitle'
import Text from '../Text/Text'
import Title from '../Title/Title'
import WhoSuits from '../WhoSuits/WhoSuits'
import style from './CryppoBusiness.module.scss'
import WhatsBussiness from '../WhatsBussiness/WhatsBussiness'
import AboutBusiness from '../AboutBusiness/AboutBusiness'
export default function CryppoBusiness(props) {

    return (
        <div className={style.container}>
            <Title text="Принимайте платежи в криптовалюте по всему миру" />
            <Text text="С автоматической стабилизацией курса в USDT и BUSD" />
            <Description description={props.description} />
            <WhatsBussiness appIcon={props.appIcon} />
            <Subtitle subtitle="Кому подойдёт CRYPPO Business" gradient="?" />
            <WhoSuits whoSuits={props.whoSuits} />
            <Subtitle subtitle="Почему CRYPPO Business" gradient="?" />
            <AboutBusiness about={props.about} />
        </div>
    )
}
