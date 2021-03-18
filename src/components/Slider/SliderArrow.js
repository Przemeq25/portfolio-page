import React from 'react';
import PropTypes from 'prop-types';
import { Arrow, ArrowsContainer } from './Slider.styles';

const SliderArrows = ({ prevSlide, nextSlide }) => (
  <ArrowsContainer>
    <Arrow direction="up" onClick={prevSlide} />
    <Arrow direction="down" onClick={nextSlide} />
  </ArrowsContainer>
);

export default SliderArrows;

SliderArrows.propTypes = {
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
};
