import React from 'react';
import PropTypes from 'prop-types';
import {
  HeroContainer,
  HeroH1,
  HeroParagraph,
  LeftContainer,
  MainTemplateWrapper,
  MediaLink,
  MediaLinksContainer,
  MainContainer,
} from './MainTemplate.style';
import Button from '../../components/Button/Button';
import { mediaLinks } from '../../data/mediaLinks';
import Header from '../../components/Header/Header';

const MainTemplate = ({ children }) => (
  <MainTemplateWrapper>
    <LeftContainer>
      <Header />
      <HeroContainer>
        <HeroParagraph> Junior front-end developer </HeroParagraph>
        <HeroH1>
          Przemysław
          <br />
          Cichoń
        </HeroH1>
        <Button text="Contact me" />
      </HeroContainer>
      <MediaLinksContainer>
        {mediaLinks.map(({ title, path }) => (
          <MediaLink href={path}>{title}</MediaLink>
        ))}
      </MediaLinksContainer>
    </LeftContainer>
    <MainContainer>{children}</MainContainer>
  </MainTemplateWrapper>
);
export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
