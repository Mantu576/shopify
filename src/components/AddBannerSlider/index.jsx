import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import BannerBox from '../BannerBox';



const AddBannerSlider = (props) => {

  return (
    <div className='py-5 w-full'>
        <Swiper
        modules={[Navigation]}
        navigation={true}
        slidesPerView={props.items}
        spaceBetween={10}
        className="mySwiper add-banner-slider">
            <SwiperSlide>
                <BannerBox img={'/banner_2.jpg'}/>
            </SwiperSlide>
            <SwiperSlide>
                <BannerBox img={'/images.jpg'}/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default AddBannerSlider;