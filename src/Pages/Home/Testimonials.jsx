import SectionHeading from "../../Components/common/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setReviews(data);
      })
  }, [])
  return (
    <div className="my-14">
      <div>
        <SectionHeading heading="Testimonials" subheading="What Our Clients Say" />
      </div>
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
        {
          reviews.map(review => <SwiperSlide key={review._id}>
            <div className="w-4/6 mx-auto text-center space-y-2">
              <div className="w-fit mx-auto space-y-4">
                <Rating
                  style={{ maxWidth: 140 }}
                  value={review.rating}
                />
                <FaQuoteLeft size={40} className="mx-auto" />
              </div>
              <p>{review.details}</p>
              <h3 className="text-orange-600 text-lg font-medium">{review.name}</h3>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Testimonials;