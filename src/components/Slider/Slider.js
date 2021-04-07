import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import gsap from 'gsap';
import { Power4 } from 'gsap/all';
import { SliderContent, SliderWrapper } from './Slider.styles';
import SliderArrows from './SliderArrow';
import Slide from './Slide';
import SliderCounter from './SliderCounter';

const Slider = ({ slides }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sliderWrapperRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sliderWrapperRef.current,
      {
        autoAlpha: 0,
        x: 200,
      },
      {
        autoAlpha: 1,
        x: 0,
        ease: Power4.easeOut,
      },
    );
  }, []);

  const nextSlide = () => {
    if (activeSlideIndex === slides.length - 1) {
      setActiveSlideIndex(0);
    } else {
      setActiveSlideIndex(activeSlideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlideIndex === 0) {
      setActiveSlideIndex(slides.length - 1);
    } else {
      setActiveSlideIndex(activeSlideIndex - 1);
    }
  };

  const pickSlide = (slideIndex) => {
    setActiveSlideIndex(slideIndex);
  };

  return (
    <SliderWrapper ref={sliderWrapperRef}>
      <SliderContent>
        {slides.map((slide, i) => (
          <Transition
            in={activeSlideIndex === i}
            unmountOnExit
            timeout={{ appear: 200, enter: 4000, exit: 100 }}
            onEnter={(node) => {
              const tl = gsap.timeline({
                defaults: { ease: Power4.easeOut },
              });

              tl.set(node, {
                autoAlpha: 0,
                scale: 1.2,
              });

              tl.to(node, {
                scale: 1,
                autoAlpha: 1,
                duration: 4,
              }).fromTo(
                [...node.children[0].children],
                { autoAlpha: 0, y: 10 },
                {
                  autoAlpha: 1,
                  y: 0,
                  stagger: 0.2,
                  duration: 1,
                  delay: -3.2,
                },
              );
            }}
            key={slide.title}
          >
            <Slide content={slide} sliderWrapperRef={sliderWrapperRef} />
          </Transition>
        ))}
      </SliderContent>
      <SliderArrows nextSlide={nextSlide} prevSlide={prevSlide} />
      <SliderCounter
        current={activeSlideIndex}
        slides={slides}
        pickSlide={pickSlide}
      />
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
