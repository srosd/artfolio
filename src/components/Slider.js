import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import classes from './Slider.module.css';

SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);



const Slider = (props) => {
    return <div>
        <Swiper
            className={`${props.size === 'small' ? classes.main : ''}`}
            spaceBetween={props.spaceBetween}
            slidesPerView={props.slidesPerView}
            autoplay={props.autoplay}
            navigation={props.navigation}
            loop={props.loop}
            pagination={props.pagination}
        >
            {
                props.images.map((image, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img className={
                                `${props.size === 'big' ? classes.slide : classes.product
                                }`
                            }
                                src={image.src}
                                alt={image.description} />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </div>
};

export default Slider;