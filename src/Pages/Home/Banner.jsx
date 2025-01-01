import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider_img_1 from '../../assets/home/01.jpg'
import slider_img_2 from '../../assets/home/02.jpg'
import slider_img_3 from '../../assets/home/03.png'
import slider_img_4 from '../../assets/home/04.jpg'
import slider_img_5 from '../../assets/home/05.png'
import slider_img_6 from '../../assets/home/06.png'
const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={slider_img_1} />
      </div>
      <div>
        <img src={slider_img_2} />
      </div>
      <div>
        <img src={slider_img_3} />
      </div>
      <div>
        <img src={slider_img_4} />
      </div>
      <div>
        <img src={slider_img_5} />
      </div>
      <div>
        <img src={slider_img_6} />
      </div>
    </Carousel>
  );
};

export default Banner;