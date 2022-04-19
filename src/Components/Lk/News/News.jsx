
import React from 'react';
import SubtitleLk from '../SubtitleLk/SubtitleLk'
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useSwiper } from 'swiper/react';
import NewsItem from './NewsItem'
import 'swiper/scss';
import style from "./News.module.scss";

const News = (props) => {
    const swiper = useSwiper();
    console.log(swiper)
    let newsItem = props.news.map(e =>
        <SwiperSlide>

            <NewsItem
                id={e.id}
                key={e.key}
                text={e.text}
                img={e.img}
            />
        </SwiperSlide>
    )
    return (
        <div className={style.container}>
            <div className={style.block}>
                <div className={style.flex}>
                    <SubtitleLk subtitle="Для вас" />
                    <div className={style.navigation}>
                        <div className={style.prev}></div>
                        <div className={style.next}></div>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={4}
                    loop={true}
                    // autoplay={{ delay: 5000, }}
                    navigation
                    pagination
                    className='news-slider'
                >
                    {newsItem}
                </Swiper>
            </div>
        </div>
    );
}

export default News;
