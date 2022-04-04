import React from 'react'
import Text from '../Text/Text'
import Subtitle from '../Subtitle/Subtitle'
import Title from '../Title/Title'
import style from './CryppoIndex.module.scss'
import Btn from '../Btn/Btn'
import Suggestions from '../Suggestions/Suggestions'
import BenefitsIndex from '../BenefitsIndex/BenefitsIndex'
import AboutIndex from '../AboutIndex/AboutIndex'
import StatisticIndex from '../StatisticIndex/StatisticIndex'
import TechnologiesIndex from '../TechnologiesIndex/TechnologiesIndex'
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
