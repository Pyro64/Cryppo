import React from 'react'
import SubtitleLk from '../SubtitleLk/SubtitleLk'
import NewsItem from './NewsItem'
import { SwiperSlide } from 'swiper/react';
import Swiper from 'react-id-swiper';
import { Autoplay, Navigation, Pagination } from 'swiper';
import style from "./News.module.scss";
export default function News(props) {
    let newsItem = props.news.map(e =>
        <SwiperSlide>
            <NewsItem
                text={e.text}
                img={e.img}
            />
        </SwiperSlide>

    )
    return (
        <div className={style.container}>
            <SubtitleLk subtitle="Для вас" />
            <div className={style.wrapper}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={4}
                    loop={true}
                    autoHeight={true}
                    // autoplay={{ delay: 5000, }}
                    navigation
                    pagination
                    className={style.swiper}
                >
                    {newsItem}
                    <div className={style.navigation}>
                        <div className={style.prev}></div>
                        <div className={style.next}></div>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}
