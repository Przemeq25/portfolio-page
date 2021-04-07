import React from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { Transition } from 'react-transition-group';
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
        <Transition
          in={current === i}
          timeout={300}
          key={slide.title}
          addEndListener={(node, done) => {
            gsap.fromTo(
              node,
              {
                autoAlpha: 0.5,
              },
              {
                ease: 'easeInOut',
                marginLeft: current === i ? -20 : 0,
                autoAlpha: 1,
                onComplete: done,
              },
            );
          }}
        >
          <SliderCounterItem
            currentSlide={current === i}
            onClick={() => pickSlide(i)}
          >
            <SliderCounterItemParagraph currentSlide={current === i}>
              {`${zeroPad(i + 1)}/${zeroPad(slides.length)}`}
            </SliderCounterItemParagraph>
          </SliderCounterItem>
        </Transition>
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
