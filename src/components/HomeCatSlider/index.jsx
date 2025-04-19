import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import './HomeCatSlider.css';

const categories = [
  { name: "Crepe T-shirt", img: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/12-cz_categoryimagelist.jpg", link: "/category/tablet" },
  { name: "Smart Phone", img: "https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-1-202403291512.jpg", link: "/category/phone" },
  { name: "Smart Watch", img: "https://api.spicezgold.com/download/file_1734528556152_beatxp-vega-x-smartwatch-black-product-images-orvmzcqz19o-p599552554-0-202303181240.webp", link: "/category/watch" },
  { name: "Laptop", img: "https://api.spicezgold.com/download/file_1734526007830_hp-15-fc0154au-laptop-amd-ryzen-3-7320u-8gb-ddr5-5500-sdram-512gb-ssd-amd-radeon-graphics-windows-11-mso-fhd-39-6-cm-15-6-inch-natural-silver-1-59-kgs-1080p-web-cam-digital-o494352995-p608658148-1-20240402160.webp", link: "/category/laptop" },
  { name: "Purse", img: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/17-cz_categoryimagelist.jpg", link: "/category/headphones" },
  { name: "Camera", img: "https://api.spicezgold.com/download/file_1734692334341_canon-eos-1500d-dslr-camera-with-18-55-mm-lens-kit-digital-o491362608-p590441094-0-202108121733.webp", link: "/category/camera" },
  { name: "Accessories", img: "https://api.spicezgold.com/download/file_1734525204708_fash.png", link: "/category/accessories" },
  { name: "Accessories", img: "https://api.spicezgold.com/download/file_1734525204708_fash.png", link: "/category/accessories" },
  { name: "Accessories", img: "https://api.spicezgold.com/download/file_1734525204708_fash.png", link: "/category/accessories" },
  { name: "Accessories", img: "https://api.spicezgold.com/download/file_1734525204708_fash.png", link: "/category/accessories" },
  { name: "Sneakers Shoes", img: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/16-cz_categoryimagelist.jpg", link: "/category/speakers" },
];

const HomeCatSlider = () => {
  return (
    <div className="home-cat-slider-wrapper py-4">
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        navigation={true}
        
        modules={[Navigation]}
        className="mySwiper cat-swiper"
        breakpoints={{
          320: { slidesPerView: 2.5, spaceBetween: 12 },
          480: { slidesPerView: 3.5, spaceBetween: 16 },
          768: { slidesPerView: 5, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 24 },
        }}
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx}>
            <Link to={cat.link} className="cat-link">
              <div className='cat-item group transition-all duration-200'>
                <div className="cat-img-wrapper">
                  <img src={cat.img} alt={cat.name} className='cat-img' />
                </div>
                <h3 className='cat-title'>{cat.name}</h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HomeCatSlider