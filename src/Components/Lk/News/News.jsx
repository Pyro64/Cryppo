
// import React from 'react';

// import { Autoplay, Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import { useSwiper } from 'swiper/react';
// import NewsItem from './NewsItem'
// import 'swiper/scss';


// const News = (props) => {
//     const swiper = useSwiper();
//     console.log(swiper)
//     let newsItem = props.news.map(e =>
//         <SwiperSlide>

//             <NewsItem
//                 id={e.id}
//                 key={e.key}
//                 text={e.text}
//                 img={e.img}
//             />
//         </SwiperSlide>
//     )
//     return (
//         <div className={style.container}>
//             <div className={style.block}>
//                 <div className={style.flex}>
//                     <SubtitleLk subtitle="Для вас" />
//                     <div className={style.navigation}>
//                         <div className={style.prev}></div>
//                         <div className={style.next}></div>
//                     </div>
//                 </div>
//                 <Swiper
//                     modules={[Navigation, Pagination, Autoplay]}
//                     slidesPerView={4}
//                     loop={true}
//                     // autoplay={{ delay: 5000, }}
//                     navigation
//                     pagination
//                     className='news-slider'
//                 >
//                     {newsItem}
//                 </Swiper>
//             </div>
//         </div>
//     );
// }

// export default News;
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Dot } from 'pure-react-carousel';
import NewsItem from './NewsItem'
import 'pure-react-carousel/dist/react-carousel.es.css';
import style from "./News.module.scss";
import SubtitleLk from '../SubtitleLk/SubtitleLk'
const News = (props) => {
    let newsItem = props.news.map(e =>
        <Slide className={style.slide}
            index={e.id}
            id={e.id}
            key={e.key}>
            <NewsItem
                text={e.text}
                img={e.img}
            />
        </Slide>

    )
    return (
        <div className={style.container}>

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={newsItem.length}
                className={style.provider}
                visibleSlides={4}
                step={4}
                dragStep={4}
            // hasMasterSpinner={true}
            >
                <div className={style.flex}>
                    <SubtitleLk subtitle="Для вас" />
                    <div className={style.navigation}>
                        <ButtonBack className={style.prev} />
                        <ButtonNext className={style.next} />
                    </div>
                </div>
                <Slider className={style.slider}>
                    {newsItem}
                </Slider>
            </CarouselProvider>
        </div>

    );

}
export default News;