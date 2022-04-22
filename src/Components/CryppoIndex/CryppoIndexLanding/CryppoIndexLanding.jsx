import React from 'react'
import style from './CryppoIndexLanding.module.scss'
import Suggestions from './Suggestions/Suggestions'
import BenefitsIndex from './BenefitsIndex/BenefitsIndex'
import AboutIndex from './AboutIndex/AboutIndex'
import StatisticIndex from './StatisticIndex/StatisticIndex'
import TechnologiesIndex from './TechnologiesIndex/TechnologiesIndex'
import Banner from '../../Banner/Banner'

export default function CryppoIndexLanding(props) {
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
