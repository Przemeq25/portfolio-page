import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import { ProjectContainer } from '../ProjectContainer/ProjectContainer.styles';
import {
  DescriptionTextWrapper,
  DescriptionWrappepr,
  DescrtiptionImage,
  DescriptionSection,
  StyledSpan,
} from './ProjectDescriptionSection.styles';

const ProjectDescriptionSection = ({
  title,
  description,
  descriptionImage,
}) => {
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.set([descriptionRef.current.children, imageRef.current], {
      autoAlpha: 0,
    });

    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: '60% bottom',
      },
    });
    tl.fromTo(
      [...descriptionRef.current.children],
      { x: '-=50' },
      { x: '+=50', autoAlpha: 1, stagger: 0.2 },
    ).fromTo(imageRef.current, { x: '+=50' }, { x: '-=50', autoAlpha: 1 });
  }, []);
  return (
    <DescriptionSection ref={sectionRef}>
      <ProjectContainer>
        <DescriptionWrappepr>
          <DescriptionTextWrapper ref={descriptionRef}>
            <Heading
              size="lg"
              weight="black"
              transform="capitalize"
              variant="h3"
              margin={30}
            >
              What is <StyledSpan>{title}</StyledSpan>?
            </Heading>
            <Paragraph size="md" color="tertiary">
              {description}
            </Paragraph>
          </DescriptionTextWrapper>
          <DescrtiptionImage content={descriptionImage.url} ref={imageRef} />
        </DescriptionWrappepr>
      </ProjectContainer>
    </DescriptionSection>
  );
};

export default ProjectDescriptionSection;

ProjectDescriptionSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  descriptionImage: PropTypes.shape({
    fileName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
