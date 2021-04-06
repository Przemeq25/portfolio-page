import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Arrow, ArrowsContainer } from './Slider.styles';

const SliderArrows = ({ prevSlide, nextSlide }) => {
  const arrowRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  const pushClassToArrow = (arrow, timeout = 300) => {
    arrow.classList.add('activated');
    setTimeout(() => {
      arrow.classList.remove('activated');
    }, timeout);
  };

  useEffect(() => {
    const ArrowUp = arrowRef.current.children[0];
    const ArrowDown = arrowRef.current.children[1];

    const changeSlide = (e) => {
      const direction = e.deltaY;

      if (!isAnimated) {
        setIsAnimated(true);

        if (direction > 0) {
          ArrowDown.click();
          pushClassToArrow(ArrowDown);
        } else {
          ArrowUp.click();
          pushClassToArrow(ArrowUp);
        }
        setTimeout(() => {
          setIsAnimated(false);
        }, 1000);
      }
    };

    window.addEventListener('wheel', changeSlide);

    return () => window.removeEventListener('wheel', changeSlide);
  });

  return (
    <ArrowsContainer ref={arrowRef}>
      <Arrow
        direction="up"
        onClick={() => {
          prevSlide();
          pushClassToArrow(arrowRef.current.children[0]);
        }}
      />
      <Arrow
        direction="down"
        onClick={() => {
          nextSlide();
          pushClassToArrow(arrowRef.current.children[1]);
        }}
      />
    </ArrowsContainer>
  );
};
export default SliderArrows;

SliderArrows.propTypes = {
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
};
