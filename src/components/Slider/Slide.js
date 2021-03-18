import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import {
  ContentContainer,
  SlideItem,
  SlideParagraph,
  SlideTitle,
} from './Slider.styles';

const Slide = ({ content }) => (
  <>
    <SlideItem content={content}>
      <ContentContainer>
        <SlideParagraph>Mobile&Web Application</SlideParagraph>
        <SlideTitle>Restaurant Management</SlideTitle>
        <Button light small>
          See more
        </Button>
      </ContentContainer>
    </SlideItem>
  </>
);

export default Slide;

Slide.propTypes = {
  content: PropTypes.string.isRequired,
};
