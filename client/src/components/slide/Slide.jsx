/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Slide.scss";
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

const Slide = ({ children }) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <div className="slide">
      <div className="container">
        <swiper-container
          ref={swiperElRef}
          slides-per-view="4"
          navigation="true"
          pagination="true"
        >
            {children}
        </swiper-container>
      </div>
    </div>
  );
};

export default Slide;