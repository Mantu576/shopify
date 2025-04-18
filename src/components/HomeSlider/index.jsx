import React,{useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <>
   <div className='homeSlider'>
    <div className='container'>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img src="https://api.spicezgold.com/download/file_1734524878924_1721277298204_banner.jpg" alt="Slide 1"  className='w-full'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg" alt="Slide 2" className='w-full'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg" alt="Slide 3" className='w-full'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg" alt="Slide 4" className='w-full'/>
      </SwiperSlide>
      
    </Swiper>
    </div>

   </div>
  </>
  )
}

export default HomeSlider