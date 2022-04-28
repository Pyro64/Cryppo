import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
} from "pure-react-carousel";
import NewsItem from "./NewsItem";
import "pure-react-carousel/dist/react-carousel.es.css";
import style from "./News.module.scss";
import SubtitleLk from "../SubtitleLk/SubtitleLk";
const News = (props) => {
  let newsItem = props.news.map((e) => (
    <Slide className={style.slide} index={e.id} id={e.id} key={e.id}>
      <NewsItem text={e.text} img={e.img} />
    </Slide>
  ));
  return (
    <div className={style.container}>
      <CarouselProvider
        naturalSlideWidth={180}
        naturalSlideHeight={180}
        totalSlides={newsItem.length}
        className={style.provider}
        visibleSlides={3.9}
        step={4}
        dragStep={4}
      >
        <div className={style.flex}>
          <SubtitleLk subtitle="Для вас" />
          <div className={style.navigation}>
            <ButtonBack className={style.prev} />
            <ButtonNext className={style.next} />
          </div>
        </div>
        <Slider className={style.slider}>{newsItem}</Slider>
        <DotGroup/>
      </CarouselProvider>
    </div>
  );
};
export default News;
