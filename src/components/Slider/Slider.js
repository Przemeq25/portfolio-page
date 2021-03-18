import React from 'react';
import PropTypes from 'prop-types';
import { Slide, SliderContent, SliderWrapper } from './Slider.styles';
import SliderArrow from './SliderArrow';

const Slider = ({ slides }) => (
  <SliderWrapper>
    <SliderContent>
      {slides.map((slide) => (
        <Slide content={slide} key={slide} />
      ))}
    </SliderContent>
    <SliderArrow />
  </SliderWrapper>
);

export default Slider;

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ),
};

Slider.defaultProps = {
  slides: [],
};
