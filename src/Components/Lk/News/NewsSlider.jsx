import React from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import NewsItem from './NewsItem'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import style from "./News.module.scss";
const NewsSlider = (props) => {
    const params = {
        slidesPerView: 4,
        // loop: true,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: `.swiper-pagination`,
            type: 'fraction',
            clickable: true,
            bulletClass: `${style.bullet}`
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }
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
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={4}
            loop={true}
            autoHeight={true}
            // autoplay={{ delay: 5000, }}
            navigation
            pagination
            className='news-slider'
        >
            {newsItem}
        </Swiper>
    );
}

export default NewsSlider;
