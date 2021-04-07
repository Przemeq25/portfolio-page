import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import {
  HeroContainer,
  LeftContainer,
  MainTemplateWrapper,
  MediaLink,
  MediaLinksContainer,
  MainContainer,
} from './MainTemplate.style';
import Button from '../../components/Button/Button';
import { mediaLinks } from '../../data/mediaLinks';
import Header from '../../components/Header/Header';
import Paragraph from '../../components/Paragraph/Paragraph';
import Heading from '../../components/Heading/Heading';
import { menuData } from '../../data/menuData';
import NavigationTransitionLink from '../../providers/NavigationTransitionLink';

const MainTemplate = ({ children }) => {
  const mainRef = useRef(null);
  const leftContainer = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      mainRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1 },
    );
  }, []);

  return (
    <MainTemplateWrapper>
      <LeftContainer ref={leftContainer}>
        <Header />
        <HeroContainer>
          <Paragraph color="primary" weight="bold" margin={10}>
            I am Przemysław Cichoń
          </Paragraph>
          <Heading size="title" weight="black" margin={40}>
            Junior front-end
            <br />
            developer
          </Heading>
          <NavigationTransitionLink
            path={menuData.filter((item) => item.title === 'Contact')[0].link}
          >
            <Button>Contact me</Button>
          </NavigationTransitionLink>
        </HeroContainer>
        <MediaLinksContainer>
          {mediaLinks.map(({ title, path }) => (
            <MediaLink href={path} key={title}>
              {title}
            </MediaLink>
          ))}
        </MediaLinksContainer>
      </LeftContainer>
      <MainContainer ref={mainRef}>{children}</MainContainer>
    </MainTemplateWrapper>
  );
};
export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
