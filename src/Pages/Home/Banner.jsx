import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../gamesimg/banner1.jpg';
import img2 from '../../gamesimg/banner2.jpg';
import img3 from '../../gamesimg/banner3.jpg';
import img4 from '../../gamesimg/banner4.jpg';
import img5 from '../../gamesimg/banner5.jpg';
import img6 from '../../gamesimg/banner6.jpg';
import img7 from '../../gamesimg/banner7.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { data } from 'react-router-dom';

const Banner = () => {

const [bannerr,setbanner]=useState([])

useEffect(()=>{
    fetch('../../../public/banner.json')
    .then(res=>res.json())
    .then(data=>{
        setbanner(data)
    })
},[])

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {/* Image slides */}
 
{ bannerr.map((banner, index) => (
        <SwiperSlide key={index}>
         <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${banner.image})`,
  }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{banner.title} </h1>
      <p className="mb-5">
      { banner.description}
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
