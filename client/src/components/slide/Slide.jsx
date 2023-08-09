import "./Slide.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slide = () => {
  return (
    <div className="slide">
      <div className="container">
        <Swiper>
          <SwiperSlide>
            {/* {children} */}
            Slider
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;