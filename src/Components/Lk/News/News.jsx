import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import NewsItem from "./NewsItem";
import { useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import SubtitleLk from "../SubtitleLk/SubtitleLk";
import "swiper/css";

import style from "./News.module.scss";

const News = (props) => {
  const swiper = useSwiper();
  let newsItem = props.news.map((e) => (
    <SwiperSlide>
      <NewsItem id={e.id} key={e.key} text={e.text} img={e.img} />
    </SwiperSlide>
  ));
  return (
    <div className={style.container}>
      <SubtitleLk subtitle="Для вас"></SubtitleLk>
      <div className={style.navigation}>
        <div className="next"></div>
        <div className="prev"></div>
      </div>

      <Swiper
        spaceBetween={25}
        slidesPerView={4}
        slidesPerGroup={4}
        navigation={{ nextEl: ".next", prevEl: ".prev", slidesPerGroup: 4 }}
        pagination={{
          type: "bullets",
          clickable: true,
          el: ".dot",
          slidesPerGroup: 4,
        }}
        className={style.swiper}
        centeredSlides={false}
        modules={[Navigation, Pagination]}
      >
        {newsItem}
      </Swiper>
      <div className="dot"></div>
    </div>
  );
};
export default News;
