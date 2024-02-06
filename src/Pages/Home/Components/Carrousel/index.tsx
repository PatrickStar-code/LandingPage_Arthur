import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


const Carousel3D = ({ images }: { images: string[] }) => {
  return (
    <Swiper
    modules={[EffectCoverflow, Pagination, Navigation]}
    speed={1000}
    slidesPerView={'auto'}
    centeredSlides={true}
    effect={'coverflow'}
    loop
    centeredSlidesBounds={true}
    navigation
    
    
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}  className='flex items-center justify-center'>
          <img src={image} alt={`Slide ${index}`} className="w-[32rem] h-[42rem] lg:h-[60rem] lg:w-[36rem]	 rounded-[2rem] object-cover" />
        </SwiperSlide>
      ))}
      
    </Swiper>
  );
};

export default Carousel3D;
