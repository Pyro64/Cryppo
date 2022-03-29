import React from 'react'
import Description from '../Description/Description'
import Text from '../Text/Text'
import Title from '../Title/Title'
import WhoSuits from '../WhoSuits/WhoSuits'
import WhatsBusiness from '../WhatsBusiness/WhatsBusiness'
import AboutBusiness from '../AboutBusiness/AboutBusiness'
import SecurityBusiness from '../SecurityBusiness/SecurityBusiness'
export default function CryppoBusiness(props) {

    return (
        <div className="main">
            <div className='container'>
                <Title text="Принимайте платежи в криптовалюте по всему миру" gradient="." />
                <Text text="С автоматической стабилизацией курса в USDT и BUSD" />
            </div>
            <Description description={props.description} />
            <WhatsBusiness appIcon={props.appIcon} />
            <WhoSuits whoSuits={props.whoSuits} />
            <AboutBusiness about={props.about} />
            <SecurityBusiness security={props.security} />
        </div>
    )
}
