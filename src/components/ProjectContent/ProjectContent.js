import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import Paragraph from '../Paragraph/Paragraph';
import { ProjectContainer } from '../ProjectContainer/ProjectContainer.styles';
import {
  Content,
  ContentBackgroundContainer,
  ContentImage,
  ContentTextWrapper,
  HeadingWithLine,
} from './ProjectContent.styles';

const ProjectContent = ({ title, description, images, ...background }) => {
  const titleRef = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    gsap.set([titleRef.current.children, ...imagesRef.current.children], {
      autoAlpha: 0,
    });

    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'bottom bottom',
      },
    });

    tl.fromTo(
      [...titleRef.current.children],
      { y: '+=30' },
      {
        y: '-=30',
        autoAlpha: 1,
        stagger: 0.2,
        duration: 1,
      },
    );
    [...imagesRef.current.children].forEach((image) =>
      gsap.fromTo(
        image,
        { y: '+=50' },
        {
          y: '-=50',
          autoAlpha: 1,
          scrollTrigger: {
            trigger: image,
            start: '10% bottom',
          },
        },
      ),
    );
  }, []);
  return (
    <Content>
      <ContentBackgroundContainer {...background.background}>
        <ProjectContainer>
          <ContentTextWrapper ref={titleRef}>
            <HeadingWithLine
              size="lg"
              weight="black"
              transform="capitalize"
              variant="h3"
            >
              {title}
            </HeadingWithLine>
            <Paragraph size="md">{description}</Paragraph>
          </ContentTextWrapper>
        </ProjectContainer>
      </ContentBackgroundContainer>
      <ProjectContainer ref={imagesRef}>
        {images?.map(({ fileName, url }) => (
          <ContentImage content={url} key={fileName} />
        ))}
      </ProjectContainer>
    </Content>
  );
};

export default ProjectContent;

ProjectContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      fileName: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
