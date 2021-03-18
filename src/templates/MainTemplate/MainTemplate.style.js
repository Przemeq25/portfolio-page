import styled from 'styled-components';

export const MainTemplateWrapper = styled.div`
  padding: 100px 0px 100px 100px;
  display: flex;
  position: relative;
  min-height: 100vh;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    flex-direction: column;
    padding: 20px 50px;
  }

  ${({ theme }) => theme.mediaBreakpoints.sm} {
    padding: 20px;
  }
`;

export const LeftContainer = styled.div`
  width: 600px;
  margin-right: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    width: 100%;
    height: 100vh;
  }
`;

export const HeroContainer = styled.div`
  margin-top: 15vh;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 0;
    flex-direction: column;
  }
`;

export const HeroParagraph = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size ${({ theme }) => theme.font.size.desktop.lg};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: capitalize;
`;

export const HeroH1 = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size ${({ theme }) => theme.font.size.desktop.title};
  font-weight: ${({ theme }) => theme.font.weight.black};
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
  color: ${({ theme }) => theme.colors.secondary};
  font-size ${({ theme }) => theme.font.size.desktop.md};
  text-transform: lowercase;
  padding-right: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: 200ms color ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MainContainer = styled.main`
  width: 100%;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    height: 100vw;
  }
`;
