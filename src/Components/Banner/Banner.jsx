import React from 'react'
import AnimIndex from '../AnimIndex/AnimIndex'


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
                        <Text text={props.banner.text} />
                    </div>
                    <img src={props.banner.img} alt="" />
                </div>
            </div>
        )
    } if (props.page === "index") {
        return (
            <div className={style.container}>
                <div className={style.flex}>
                    <div className={style.block}>
                        <Title text={props.banner.title} gradient={props.banner.gradient} />
                        <Text text={props.banner.text} />
                    </div>
                    <div className={style.item}>
                        <div className={style.animIndex}>
                            <AnimIndex bannerIndex={props.bannerIndex} addStep={props.addStep} step={props.step} />
                        </div>
                        <img className={style.banner} src={props.banner.img} alt="" />
                    </div>
                </div>
            </div>
        )
    }

}
