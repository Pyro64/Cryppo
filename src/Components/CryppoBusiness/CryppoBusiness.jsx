import React from 'react'
import Description from '../Description/Description'
import Subtitle from '../Subtitle/Subtitle'
import Text from '../Text/Text'
import Title from '../Title/Title'
import WhoSuits from '../WhoSuits/WhoSuits'
import WhatsBussiness from '../WhatsBussiness/WhatsBussiness'
import AboutBusiness from '../AboutBusiness/AboutBusiness'
export default function CryppoBusiness(props) {

    return (
        <div className="main">
            <div className='container'>
                <Title text="Принимайте платежи в криптовалюте по всему миру" gradient="." />
                <Text text="С автоматической стабилизацией курса в USDT и BUSD" />
                <Description description={props.description} />
                <WhatsBussiness appIcon={props.appIcon} />
                <Subtitle subtitle="Кому подойдёт CRYPPO Business" gradient="?" />
            </div>
            <div className='bigContainer'>
                <WhoSuits whoSuits={props.whoSuits} />
            </div>
            <div className='container'>
                <Subtitle subtitle="Почему CRYPPO Business" gradient="?" />
                <AboutBusiness about={props.about} />
            </div>
        </div>
    )
}
