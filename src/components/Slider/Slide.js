import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap, Power4 } from 'gsap/all';
import { ContentContainer, LinkButton, SlideItem } from './Slider.styles';
import Paragraph from '../Paragraph/Paragraph';
import Heading from '../Heading/Heading';

const Slide = ({ content, sliderWrapperRef }) => {
  const sliderRef = useRef(null);

  return (
    <SlideItem content={content.thumbnail.url} ref={sliderRef}>
      <ContentContainer>
        <Paragraph size="sm" weight="medium" color="primary">
          {content.subtitle}
        </Paragraph>
        <Heading as="h2" color="contrastText" weight="bold" size="xl">
          {content.title}
        </Heading>
        <LinkButton
          light="true"
          small="true"
          to={content.slug}
          exit={{
            trigger: ({ node }) => {
              const tl = gsap.timeline({
                defaults: { ease: Power4.easeInOut },
              });
              tl.to(
                [
                  ...sliderRef.current.children,
                  sliderWrapperRef.current.children[1],
                  sliderWrapperRef.current.children[2],
                ],
                {
                  autoAlpha: 0,
                  duration: 1,
                },
              )
                .to(sliderWrapperRef.current, {
                  position: 'absolute',
                  right: 0,
                  width: '100vw',
                  height: '100vh',
                  boxShadow: 'none',
                })
                .to([node.children[0], node.children[1].children[0]], {
                  autoAlpha: 0,
                })
                .to(sliderWrapperRef.current, {
                  top: 0,
                  height: '60vh',
                });
            },
            length: 3,
          }}
          entry={{
            delay: 2.5,
          }}
        >
          See more
        </LinkButton>
      </ContentContainer>
    </SlideItem>
  );
};
export default Slide;

Slide.propTypes = {
  content: PropTypes.shape({
    image: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
    thumbnail: PropTypes.shape({ url: '' }),
  }).isRequired,
  sliderWrapperRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
