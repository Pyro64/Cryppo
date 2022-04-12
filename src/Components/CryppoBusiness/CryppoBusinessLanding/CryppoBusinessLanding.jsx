import React from 'react'
import Description from '../../Description/Description'
import WhoSuits from './WhoSuits/WhoSuits'
import WhatsBusiness from './WhatsBusiness/WhatsBusiness'
import AboutBusiness from './AboutBusiness/AboutBusiness'
import SecurityBusiness from './SecurityBusiness/SecurityBusiness'
import FaqBusiness from './FaqBusiness/FaqBusiness'
import ConnectionBusiness from './СonnectionBusiness/ConnectionBusiness'
import Banner from '../../Banner/Banner'


export default function CryppoBusinessLanding(props) {

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
