import React from 'react'
import style from './CryppoIndex.module.scss'
import Suggestions from '../CryppoIndexComponents/Suggestions/Suggestions'
import BenefitsIndex from '../CryppoIndexComponents/BenefitsIndex/BenefitsIndex'
import AboutIndex from '../CryppoIndexComponents/AboutIndex/AboutIndex'
import StatisticIndex from '../CryppoIndexComponents/StatisticIndex/StatisticIndex'
import TechnologiesIndex from '../CryppoIndexComponents/TechnologiesIndex/TechnologiesIndex'
import Banner from '../Banner/Banner'

export default function CryppoIndex(props) {
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
