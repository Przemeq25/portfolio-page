import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Paragraph from '../Paragraph/Paragraph';
import {
  ProjectChanger,
  ProjectChangerWrapper,
  ProjectHeaderWrapper,
} from './ProjectHeader.styles';
import Logo from '../Logo/Logo';

const ProjectHeader = ({ prevProject, nextProject }) => {
  const headerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const projectChangers = [
      headerRef.current.children[0],
      headerRef.current.children[2],
    ];

    gsap.set([...headerRef.current.children], {
      autoAlpha: 0,
    });

    gsap.fromTo(
      [headerRef.current.children[1]],
      { y: -60 },
      {
        duration: 1,
        y: 0,
        autoAlpha: 1,
      },
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'section',
        start: '60% 60',
        end: 'top bottom',
        scrub: true,
      },
    });

    tl.fromTo(
      headerRef.current,
      {
        boxShadow: 'none',
        background: 'transparent',
      },
      {
        background: '#fff',
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
      },
    ).to(projectChangers, {
      autoAlpha: 1,
      duration: 2,
    });
  }, []);

  return (
    <ProjectHeaderWrapper ref={headerRef}>
      <ProjectChangerWrapper to={`/${prevProject?.slug}`}>
        <ProjectChanger color="secondary" weight="black" size="xs">
          PREV-PROJECT
        </ProjectChanger>
        <Paragraph size="xs" weight="bold" color="primary" as="span">
          {prevProject?.title}
        </Paragraph>
      </ProjectChangerWrapper>
      <Logo />
      <ProjectChangerWrapper to={`/${nextProject?.slug}`} next="true">
        <ProjectChanger color="secondary" weight="black" size="xs" next>
          NEXT-PROJECT
        </ProjectChanger>
        <Paragraph
          size="xs"
          weight="bold"
          color="primary"
          as="span"
          align="right"
        >
          {nextProject?.title}
        </Paragraph>
      </ProjectChangerWrapper>
    </ProjectHeaderWrapper>
  );
};

export default ProjectHeader;

ProjectHeader.propTypes = {
  prevProject: PropTypes.shape({ title: '', slug: '' }).isRequired,
  nextProject: PropTypes.shape({ title: '', slug: '' }).isRequired,
};
