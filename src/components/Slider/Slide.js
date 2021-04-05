import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { ContentContainer, SlideItem } from './Slider.styles';
import Paragraph from '../Paragraph/Paragraph';
import Heading from '../Heading/Heading';

const Slide = ({ content }) => (
  <SlideItem content={content.image}>
    <ContentContainer>
      <Paragraph size="sm" weight="medium" color="primary">
        {content.subtitle}
      </Paragraph>
      <Heading as="h2" color="contrastText" weight="bold" size="xl">
        {content.title}
      </Heading>
      <Button light small>
        See more
      </Button>
    </ContentContainer>
  </SlideItem>
);
export default Slide;

Slide.propTypes = {
  content: PropTypes.shape({ image: '', subtitle: '', title: '', path: '/' })
    .isRequired,
};
