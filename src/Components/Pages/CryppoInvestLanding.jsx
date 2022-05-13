import React, { Suspense } from "react";
import style from './CryppoIndexLanding/CryppoIndexLanding.module.scss'
import Suggestions from '../Landing/Suggestions/Suggestions'
import BenefitsIndex from '../Landing/BenefitsIndex/BenefitsIndex'
import AboutIndex from '../Landing/AboutIndex/AboutIndex'
import StatisticIndex from '../Landing/StatisticIndex/StatisticIndex'
import TechnologiesIndex from '../Landing/TechnologiesIndex/TechnologiesIndex'

import Banner from '../UI/Banner/Banner'
export default function CryppoInvestLanding(props) {
    return (
        <div className='main'>
            <Banner page="index" banner={props.banner} bannerIndex={props.bannerIndex} addStep={props.addStep} step={props.step} />
            <Suggestions suggestions={props.suggestions} />
            <AboutIndex aboutDataIndex={props.aboutDataIndex} />
            <BenefitsIndex benefits={props.benefits} />
            <StatisticIndex style={style.chart} />
            <TechnologiesIndex />
        </div>
    )
}
