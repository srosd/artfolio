import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import classes from './Slider.module.css';

SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

const images = [
    {
        src: '/images/moon.jpg',
        description: 'foto de la luna'
    },
    {
        src: '/images/rocket.jpg',
        description: 'foto de rocket de marvel'
    },
    {
        src: '/images/painting.jpg',
        description: 'foto de pintura guay'
    }
];

const Slider = () => {
    return <>
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                images.map((image) => {
                    return (
                        <SwiperSlide>
                            <img className={classes.slide} src={image.src} alt={image.description} />
                        </SwiperSlide>
                    )
                })
            }

        </Swiper>
    </>
};

export default Slider;