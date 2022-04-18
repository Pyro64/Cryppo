import React from 'react'

import SecurityBusinessItem from './SecurityBusinessItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import Subtitle from '../../../Subtitle/Subtitle'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import style from './SecurityBusiness.module.scss'
import AnimSecurity from '../../../AnimSecurity/AnimSecurity';
export default function SecurityBusiness(props) {
    let elementItem = props.security.map(e =>
        <SwiperSlide
            id={e.id}
            key={e.id}>
            <SecurityBusinessItem
                title={e.title}
                text={e.text}
                img={e.img}
            />
        </SwiperSlide>
    )
    return (
        <div className={style.container}>
            <Subtitle modify={{ width: '50%' }} subtitle="Безопасность для вас и ваших клиентов" gradient="." />
            <div className={style.flex}>
                <div className={style.animate}>
                    <div className={style.animateImg}>
                        <AnimSecurity />
                    </div>
                </div>
                <div className={style.wrapper}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        // autoplay={{ delay: 5000, }}
                        navigation={{ nextEl: `${style.next}`, prevEl: `${style.prev}`, }}
                        pagination={{ clickable: true, bulletClass: `${style.bullet}`, modifierClass: `${style.fraction}`, }}
                        className={style.swiper}
                    >
                        {elementItem}
                        <div className={style.navigation}>
                            <div className={style.prev}></div>
                            <div className={style.next}></div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
