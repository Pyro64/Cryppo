import React from 'react'
import Description from '../Description/Description'

import WhoSuits from '../CryppoBusinessComponents/WhoSuits/WhoSuits'
import WhatsBusiness from '../CryppoBusinessComponents/WhatsBusiness/WhatsBusiness'
import AboutBusiness from '../CryppoBusinessComponents/AboutBusiness/AboutBusiness'
import SecurityBusiness from '../CryppoBusinessComponents/SecurityBusiness/SecurityBusiness'
import FaqBusiness from '../CryppoBusinessComponents/FaqBusiness/FaqBusiness'
import ConnectionBusiness from '../CryppoBusinessComponents/СonnectionBusiness/ConnectionBusiness'
import Banner from '../Banner/Banner'

export default function CryppoBusiness(props) {

    return (
        
        <div className="main">
            <Banner page="business" banner={props.banner} />
            <Description description={props.description} />
            <WhatsBusiness appIcon={props.appIcon} />
            <WhoSuits whoSuits={props.whoSuits} />
            <AboutBusiness about={props.about} />
            <SecurityBusiness security={props.security} />
            <ConnectionBusiness connectionList={props.connectionList} />
            <FaqBusiness faq={props.faq} />
        </div>
    )
}
