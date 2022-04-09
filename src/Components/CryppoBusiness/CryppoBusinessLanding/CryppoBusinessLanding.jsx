import React from 'react'
import Description from '../../Description/Description'
import WhoSuits from './CryppoBusinessLandingComponents/WhoSuits/WhoSuits'
import WhatsBusiness from './CryppoBusinessLandingComponents/WhatsBusiness/WhatsBusiness'
import AboutBusiness from './CryppoBusinessLandingComponents/AboutBusiness/AboutBusiness'
import SecurityBusiness from './CryppoBusinessLandingComponents/SecurityBusiness/SecurityBusiness'
import FaqBusiness from './CryppoBusinessLandingComponents/FaqBusiness/FaqBusiness'
import ConnectionBusiness from './CryppoBusinessLandingComponents/СonnectionBusiness/ConnectionBusiness'
import Banner from '../../Banner/Banner'
import FooterContainer from "../../Footer/FooterContainer";


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
            <FooterContainer logo={props.logo} />
        </div>
    )
}
