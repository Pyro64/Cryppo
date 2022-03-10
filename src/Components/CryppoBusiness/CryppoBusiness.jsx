import React from 'react'
import Description from '../Description/Description'
import IconPay from '../iconPay/IconPay'
import Subtitle from '../Subtitle/Subtitle'
import Text from '../Text/Text'
import Title from '../Title/Title'
import WhoSuits from '../WhoSuits/WhoSuits'
import style from './CryppoBusiness.module.scss'
export default function CryppoBusiness(props) {

    return (
        <div className={style.container}>
            <Title text="Принимайте платежи в криптовалюте по всему миру" />
            <Text text="С автоматической стабилизацией курса в USDT и BUSD" />
            <Description description={props.description} />
            <div className={style.block}>
                <Subtitle subtitle="Что такое CRYPPO Business" gradient="?" />
                <Text text="CRYPPO Business – это платёжная система, 
                которая принимает платежи в криптовалютах и защищает ваши доходы от колебаний курса на криптовалютной бирже. 
                По вашему желанию CRYPPO Business может переводить все поступающие средства в 
                стейблкоины – криптовалюты со стабильным курсом, который привязан к доллару." />
                <Subtitle subtitle="CRYPPO Business принимает к оплате" gradient=":" />
                <IconPay appIcon={props.appIcon} />
            </div>
            <Subtitle subtitle="Кому подойдёт CRYPPO Business" gradient="?" />
            <WhoSuits whoSuits={props.whoSuits} />
        </div>
    )
}
