import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import Img from 'gatsby-image';
import Heading from '../Heading/Heading';
import { ProjectContainer } from '../ProjectContainer/ProjectContainer.styles';
import {
  ButtonLink,
  HeroImg,
  HeroSection,
  HeroWrapper,
  LinksWrapper,
} from './ProjectHeroSection.styles';
import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';

const ProjectHeroSection = ({ image, title, subtitle, github, live }) => {
  const imageRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.set([imageRef.current, heroRef.current.children], {
      autoAlpha: 0,
    });

    const tl = gsap.timeline([imageRef.current, ...heroRef.current.children], {
      default: { ease: 'power1.inOut' },
    });

    tl.to(imageRef.current, {
      autoAlpha: 1,
      duration: 1,
    }).fromTo(
      heroRef.current.children,
      { y: '-=10' },
      { y: '+=10', autoAlpha: 1, stagger: 0.3 },
    );
  }, []);

  return (
    <HeroSection ref={imageRef}>
      <HeroImg>
        <Img src={image} />
      </HeroImg>
      <ProjectContainer>
        <HeroWrapper ref={heroRef}>
          <Heading size="title" weight="black" transform="capitalize">
            {title}
          </Heading>
          <Paragraph size="sm" margin={40} color="tertiary">
            {subtitle}
          </Paragraph>
          <LinksWrapper>
            {github ? (
              <ButtonLink small as="a" href={github} target="_blank">
                GitHub
              </ButtonLink>
            ) : (
              <ButtonLink disabled small>
                Private
              </ButtonLink>
            )}
            {live && <Button small>Live</Button>}
          </LinksWrapper>
        </HeroWrapper>
      </ProjectContainer>
    </HeroSection>
  );
};

export default ProjectHeroSection;

ProjectHeroSection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  github: PropTypes.string,
  live: PropTypes.string,
};

ProjectHeroSection.defaultProps = {
  github: '',
  live: '',
};
