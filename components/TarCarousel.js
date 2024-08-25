import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Image from 'next/image';

const TarCarousel = () => {
  const images = [
    { src: '/Tar1.jpg', alt: 'Image 1' },
    { src: '/Tar2.jpg', alt: 'Image 2' },
    { src: '/Tar3.jpg', alt: 'Image 3' },
  ];

  return (
    <div className='carousel-container' style={{ maxWidth: '1235px', margin: '0 auto' }}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} style={{ width: '350px', height: '400px' }}>
            <Image 
              src={image.src} 
              alt={image.alt} 
              layout="fill" 
              objectFit="cover" 
              style={{ borderRadius: '20px' }} 
            />
          </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
};

export default TarCarousel;
