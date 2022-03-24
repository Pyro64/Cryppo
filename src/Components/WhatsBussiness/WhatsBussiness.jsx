import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import IconPay from '../iconPay/IconPay';
import Subtitle from '../Subtitle/Subtitle';
import Text from '../Text/Text';
import style from './WhatsBussiness.module.scss'
const WhatsBussiness = (props) => {
    return (
        <div className={style.container}>
            <Parallax className={style.parallax} translateX={[-100, 100,]} />
            <div className={style.block}>
                <div className={style.item}>
                    <Subtitle subtitle="Что такое CRYPPO Business" gradient="?" />
                    <Text modify={{ width: '70%' }} text="CRYPPO Business – это платёжная система, 
                которая принимает платежи в криптовалютах и защищает ваши доходы от колебаний курса на криптовалютной бирже. 
                По вашему желанию CRYPPO Business может переводить все поступающие средства в 
                стейблкоины – криптовалюты со стабильным курсом, который привязан к доллару." />
                </div>
                <div className={style.item}>
                    <Subtitle subtitle="CRYPPO Business принимает к оплате" gradient=":" />
                    <IconPay appIcon={props.appIcon} />
                </div>
            </div>
        </div>
    );
}

export default WhatsBussiness;
