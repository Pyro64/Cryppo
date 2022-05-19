import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import IconPay from '../iconPay/IconPay';
import Subtitle from '../../UI/Subtitle/Subtitle';
import Text from '../../UI/Text/Text';
import style from './WhatsBusiness.module.scss'
const WhatsBussiness = (props) => {

    return (
        <div className={style.container}>
            <Parallax className={style.parallax} translateX={[-100, 100,]} />
            <div className={style.block}>
                <div className={style.item}>
                    <Subtitle >Что такое CRYPPO Business<span>?</span></Subtitle>
                    <div className={style.text}>
                        <p>CRYPPO Business – это платёжная система,
                            которая принимает платежи в криптовалютах и защищает ваши доходы от колебаний курса на криптовалютной бирже.</p>
                        <p>По вашему желанию CRYPPO Business может переводить все поступающие средства в
                            стейблкоины – криптовалюты со стабильным курсом, который привязан к доллару.</p>
                    </div>
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
