import React from 'react'
import Description from '../Description/Description'
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
            </div>
            <Description description={props.description} />
            <WhatsBussiness appIcon={props.appIcon} />
            <WhoSuits whoSuits={props.whoSuits} />
            <AboutBusiness about={props.about} />
        </div>
    )
}
