import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import React from 'react';
import { testimonials } from '../../data';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <Swiper
      tag="section"
      //   modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      //   speed={600}
      //   loop={true}
      //   centeredSlides={true}
      //   navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
      //   pagination={{ clickable: true }}
      //   autoplay={{ delay: 2500, disableOnInteraction: false }}
      //   className="position-relative"
    >
      {testimonials.map((testimonial, i) => (
        <SwiperSlide key={i}>Slide 1</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonials;
