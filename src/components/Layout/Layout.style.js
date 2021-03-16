import styled, { css } from 'styled-components';

const shapeStyle = css`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const MainTemplate = styled.div`
  padding: 100px 0px 100px 100px;
  display: flex;
  position: relative;
  height: 100vh;
`;
export const BackgroundShapePrimary = styled.div`
  ${shapeStyle}
  clip-path: polygon(0 0, 30% 0, 100% 100%, 0 70%);
  background-color: ${(props) => props.theme.colors.background.secondary};
  z-index: -1;
`;

export const BackgroundShapeSecondary = styled.div`
  ${shapeStyle}
  clip-path: polygon(100% 73%, 0% 100%, 100% 100%);
  background-color: ${(props) => props.theme.colors.background.tertiary};
  z-index: -2;
`;

export const LeftContainer = styled.div`
  width: 600px;
  height: 100%;
  margin-right: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const HeroContainer = styled.div`
  margin-top: 15vh;
`;

export const HeroParagraph = styled.p`
    color: ${(props) => props.theme.colors.primary};
    font-size ${(props) => props.theme.font.size.desktop.lg};
    font-weight: ${(props) => props.theme.font.weight.bold};
    text-transform: capitalize;
`;

export const HeroH1 = styled.h1`
    color: ${(props) => props.theme.colors.secondary};
    font-size ${(props) => props.theme.font.size.desktop.title};
    font-weight: ${(props) => props.theme.font.weight.black};
    text-transform: uppercase;
    margin: 20px 0 40px;
`;

export const MediaLinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  padding-top: 50px;
`;

export const MediaLink = styled.a`
    color: ${(props) => props.theme.colors.secondary};
    font-size ${(props) => props.theme.font.size.desktop.md};
    text-transform: lowercase;
    padding-right: 50px;
    cursor: pointer;
`;
