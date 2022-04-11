import React from 'react'
import style from './CryppoIndexLanding.module.scss'
import Suggestions from './CryppoIndexLandingComponents/Suggestions/Suggestions'
import BenefitsIndex from './CryppoIndexLandingComponents/BenefitsIndex/BenefitsIndex'
import AboutIndex from './CryppoIndexLandingComponents/AboutIndex/AboutIndex'
import StatisticIndex from './CryppoIndexLandingComponents/StatisticIndex/StatisticIndex'
import TechnologiesIndex from './CryppoIndexLandingComponents/TechnologiesIndex/TechnologiesIndex'
import FooterContainer from "../../Footer/FooterContainer";

import Banner from '../../Banner/Banner'

export default function CryppoIndexLanding(props) {
    return (
        <div className='main'>
            <Banner page="index" banner={props.banner} bannerIndex={props.bannerIndex} addStep={props.addStep} step={props.step} />
            <Suggestions suggestions={props.suggestions} />
            <AboutIndex aboutData={props.aboutData} />
            <BenefitsIndex benefits={props.benefits} />
            <StatisticIndex style={style.chart} />
            <TechnologiesIndex />
        </div>
    )
}
