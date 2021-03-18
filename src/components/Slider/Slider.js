import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Slide, SliderContent, SliderWrapper } from './Slider.styles';
import SliderArrow from './SliderArrow';

const Slider = ({ slides }) => {
  const sliderRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [sizeToTranslate, setSizeToTranslate] = useState(0);

  useEffect(() => {
    setSizeToTranslate(sliderRef.current.clientHeight);
  }, []);

  useEffect(() => {
    const resizeSlide = () => {
      if (window.innerWidth >= 1280) {
        setSizeToTranslate(sliderRef.current.clientHeight);
      } else {
        setSizeToTranslate(sliderRef.current.clientWidth);
      }
      setTranslate(activeSlideIndex * sizeToTranslate);
    };

    window.addEventListener('resize', resizeSlide);

    return () => window.removeEventListener('resize', resizeSlide);
  });

  const nextSlide = () => {
    if (activeSlideIndex === slides.length - 1) {
      setTranslate(0);
      setActiveSlideIndex(0);
    } else {
      setActiveSlideIndex(activeSlideIndex + 1);
      setTranslate((activeSlideIndex + 1) * sizeToTranslate);
    }
  };

  const prevSlide = () => {
    if (activeSlideIndex === 0) {
      setActiveSlideIndex(slides.length - 1);
      setTranslate((slides.length - 1) * sizeToTranslate);
    } else {
      setActiveSlideIndex(activeSlideIndex - 1);
      setTranslate((activeSlideIndex - 1) * sizeToTranslate);
    }
  };

  return (
    <SliderWrapper>
      <SliderContent ref={sliderRef} translate={translate}>
        {slides.map((slide) => (
          <Slide content={slide} key={slide} />
        ))}
      </SliderContent>
      <SliderArrow nextSlide={nextSlide} prevSlide={prevSlide} />
    </SliderWrapper>
  );
};

export default Slider;

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ),
};

Slider.defaultProps = {
  slides: [],
};
