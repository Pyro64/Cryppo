import React from 'react'
import AnimIndex from '../AnimIndex/AnimIndex'
import Btn from '../Btn/Btn'

import Text from '../Text/Text'
import Title from '../Title/Title'
import style from './Banner.module.scss'
export default function Banner(props) {

    if (props.page === "business") {
        return (
            <div className={style.container}>
                <div className={style.flex}>
                    <div className={style.block}>
                        <Title text={props.banner.title} gradient={props.banner.gradient} />
                        <div className={style.text}>С автоматической стабилизацией курса в USDT и BUSD</div>
                    </div>
                    <img className={style.img} src={props.banner.img} alt="" />
                </div>
            </div>
        )
    } if (props.page === "index") {
        return (
            <div className={style.container}>
                <div className={style.flex}>
                    <div className={style.block}>
                        <Title text={props.banner.title} gradient={props.banner.gradient} />
                        <div className={style.textIndex}>Автоматически ребалансируемый индекс из 8 самых высококапитализированных цифровых активов на основе машинного обучения (искусственного интеллекта)</div>
                        <Btn link="#" text="Узнать больше" />
                    </div>
                    <div className={style.item}>
                        <div className={style.animIndex}>
                            <AnimIndex bannerIndex={props.bannerIndex} addStep={props.addStep} step={props.step} />
                        </div>
                        <img className={style.imgAnim} src={props.banner.img} alt="" />
                    </div>
                </div>
            </div>
        )
    }

}
