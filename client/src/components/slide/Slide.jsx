/* eslint-disable react/prop-types */
import "./Slide.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slide = ({ children }) => {
  return (
    <div className="slide">
      <div className="container">
        <Swiper>
          <SwiperSlide>
            {children}
            {/* Slider - to fix it */}
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Slide;