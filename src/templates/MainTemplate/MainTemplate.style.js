import styled from 'styled-components';

export const MainTemplateWrapper = styled.div`
  padding: 100px 0px 100px 100px;
  display: flex;
  min-height: 100vh;
  transition: padding 500ms ease;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    flex-direction: column;
    padding: 20px 50px;
  }

  ${({ theme }) => theme.mediaBreakpoints.sm} {
    padding: 20px;
  }

  @media all and (max-height: 600px) {
    padding: 20px 20px 20px 20px;
  }
`;

export const LeftContainer = styled.div`
  width: 600px;
  margin-right: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    width: 100%;
    height: 100vh;
  }
`;

export const HeroContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    text-align: center;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const MediaLinksContainer = styled.div`
  display: flex;
  margin-top: auto;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    padding-bottom: 10px;
    justify-content: center;
  }
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

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    font-size ${({ theme }) => theme.font.size.mobile.md};
    padding: 20px;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  visibility: hidden;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    padding: 10px 0px;
    flex-direction: column;
  }
`;
