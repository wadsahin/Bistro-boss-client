// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import food1 from "../assets/home/slide1.jpg"
import food2 from "../assets/home/slide2.jpg"
import food3 from "../assets/home/slide3.jpg"
import food4 from "../assets/home/slide4.jpg"
import food5 from "../assets/home/slide5.jpg"

const FeaturesFoods = () => {
  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper my-10"
    >
      <SwiperSlide>
        <img src={food1} alt="feature food" />
        <p className='text-lg uppercase font-medium mx-auto w-fit px-3 -mt-10 text-white'>Salads</p>
      </SwiperSlide>
      <SwiperSlide><img src={food2} alt="feature food" />
        <p className='text-lg uppercase font-medium mx-auto w-fit px-3 -mt-10 text-white'>Soups</p>
      </SwiperSlide>
      <SwiperSlide><img src={food3} alt="feature food" />
        <p className='text-lg uppercase font-medium mx-auto w-fit px-3 -mt-10 text-white'>Pizzas</p>
      </SwiperSlide>
      <SwiperSlide><img src={food4} alt="feature food" />
        <p className='text-lg uppercase font-medium mx-auto w-fit px-3 -mt-10 text-white'>Desserts</p>
      </SwiperSlide>
      <SwiperSlide><img src={food5} alt="feature food" />
        <p className='text-lg uppercase font-medium mx-auto w-fit px-3 -mt-10 text-white'>Salads</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default FeaturesFoods;