import React from 'react'

import SecurityBusinessItem from './SecurityBusinessItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Subtitle from '../../../Subtitle/Subtitle'
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
                        modules={[Navigation, Pagination, Autoplay,]}
                        spaceBetween={50}
                        // slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 5000, }}
                        navigation={{ nextEl: '.sec-next', prevEl: '.sec-prev', }}
                        pagination={{ clickable: true, dynamicBullets: true, dynamicMainBullets: 1, }}
                        className={style.swiper}
                    >
                        {elementItem}
                        <div className={style.navigation}>
                            <div className='sec sec-prev'></div>
                            <div className='sec sec-next'></div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
