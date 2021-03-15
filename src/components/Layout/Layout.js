import * as React from "react";
import PropTypes from "prop-types";
import Header from '../Header/Header';
import { HeroContainer, HeroH1, HeroParagraph, LeftContainer, MainContainer, MainTemplate, MediaLink, MediaLinksContainer } from './Layout.style';
import { Button } from "../Button/Button";

const Layout = ({ children }) => {

  return (
    <MainTemplate>
        <LeftContainer>
            <Header/>
            <HeroContainer>
                <HeroParagraph>Junior front-end developer</HeroParagraph>
                <HeroH1>Przemysław<br/>Cichoń</HeroH1>
                <Button text = "Contact me"/>
            </HeroContainer>
            <MediaLinksContainer>
                <MediaLink>
                    linkedin.
                </MediaLink>
                <MediaLink>
                    github.
                </MediaLink>
            </MediaLinksContainer>
        </LeftContainer>
        <MainContainer>
           {children}
        </MainContainer>
    </MainTemplate>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout