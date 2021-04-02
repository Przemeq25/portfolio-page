import React from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import { ProjectContainer } from '../ProjectContainer/ProjectContainer.styles';
import {
  BackToTopButton,
  FooterActionWrapper,
  ProjectFooterInfoWrapper,
  ProjectFooterWrapper,
} from './ProjectFooter.styles';

const ProjectFooter = ({ info }) => {
  gsap.registerPlugin(ScrollToPlugin);

  const handleClick = (e) => {
    e.stopPropagation();
    gsap.to(window, {
      duration: 2,
      ease: 'power2',
      scrollTo: {
        y: 0,
      },
    });
  };

  return (
    <ProjectFooterWrapper>
      <ProjectContainer>
        <ProjectFooterInfoWrapper>
          {info.map(({ heading, paragraph }) => (
            <div>
              <Heading
                variant="h4"
                size="md"
                color="primary"
                weight="black"
                transform="capitalize"
              >
                {heading}
              </Heading>
              <Paragraph size="sm">{paragraph}</Paragraph>
            </div>
          ))}
        </ProjectFooterInfoWrapper>
        <FooterActionWrapper>
          <BackToTopButton small onClick={handleClick}>
            Back to top
          </BackToTopButton>
        </FooterActionWrapper>
      </ProjectContainer>
    </ProjectFooterWrapper>
  );
};

export default ProjectFooter;

ProjectFooter.propTypes = {
  info: PropTypes.arrayOf(PropTypes.object),
};

ProjectFooter.defaultProps = {
  info: [{ heading: '', paragraph: '' }],
};
