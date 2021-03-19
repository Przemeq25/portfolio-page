import React from 'react';
import PropTypes from 'prop-types';
import {
  SliderCounterItem,
  SliderCounterItemParagraph,
  SliderCounterWrapper,
} from './Slider.styles';

const SliderCounter = ({ current, slides, pickSlide }) => {
  const zeroPad = (number) => String(number).padStart(2, '0');
  return (
    <SliderCounterWrapper>
      {slides.map((slide, i) => (
        <SliderCounterItem
          key={slide}
          currentSlide={current === i}
          onClick={() => pickSlide(i)}
        >
          <SliderCounterItemParagraph currentSlide={current === i}>
            {`${zeroPad(i + 1)}/${zeroPad(slides.length)}`}
          </SliderCounterItemParagraph>
        </SliderCounterItem>
      ))}
    </SliderCounterWrapper>
  );
};

export default SliderCounter;

SliderCounter.propTypes = {
  current: PropTypes.number.isRequired,
  slides: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ),
  pickSlide: PropTypes.func.isRequired,
};

SliderCounter.defaultProps = {
  slides: [],
};
