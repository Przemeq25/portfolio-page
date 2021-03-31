import styled, { css } from 'styled-components';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';

export const ProjectDescrtiptionSection = styled.section`
  padding: 200px 0;
  transition: all 0.3s ease-in-out;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    padding: 100px 0px;
`;

export const DescriptionWrappepr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const DescriptionTextWrapper = styled.div`
  flex: 1 1 50%;
  margin: 50px 50px 50px 0px;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    margin: 50px 0;
    text-align: center;
  }
`;

export const DescrtiptionImage = styled.div`
  width: 50%;
  padding-top: 45%;
  background-image: url(${({ content }) => content});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.3s ease-in-out;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    width: 80%;
    padding-top: 80%;
  }

  ${({ theme }) => theme.mediaBreakpoints.sm} {
    width: 90%;
    padding-top: 90%;
  }
`;

const pseudoElementLine = css`
  content: '';
  height: 5px;
  flex: 1 1 45%;
`;

export const HeadingWithLine = styled(Heading)`
  display: flex;
  align-items: center;
  margin: 0 20px 30px;

  &:before {
    ${pseudoElementLine};

    ${({ theme }) => theme.mediaBreakpoints.md} {
      flex: none;
      margin: 0 0 20px;
      width: 100px;
    }
  }
  &:after {
    ${pseudoElementLine};
  }

  ${({ theme }) => theme.mediaBreakpoints.md} {
    flex-direction: column;
  }
`;

export const ContentSection = styled.article`
  position: relative;
`;

export const ContentTextWrapper = styled.div`
  position: relative;
`;

export const ContentBackgroundContainer = styled.div`
  background: ${({ theme, color }) => theme.colors.background[color]};
  display: flex;
  align-items: center;
  padding: ${({ skewRight, skewLeft }) =>
    skewRight || skewLeft ? '350px 0' : '250px 0'};
  transition: all 0.5s ease;
  position: relative;
  z-index: -1;

  ${({ skewLeft, skewRight }) => {
    if (skewRight) {
      return 'transform: skewY(20deg);';
    }
    if (skewLeft) {
      return 'transform: skewY(-20deg);';
    }
    return null;
  }}

  

  ${HeadingWithLine} {
    ${({ center }) => css`
      &:before {
        display: ${center ? 'block' : 'none'};

        ${({ theme }) => theme.mediaBreakpoints.md} {
          display: block;
        }
      }

      &:before,
      &:after {
        background: ${({ theme, light }) =>
          light ? theme.colors.primary : theme.colors.secondary};
      }
    `};
    }
  }; 
  
  ${ContentTextWrapper} {
    text-align: ${({ center }) => (center ? 'center' : 'left')};

    ${({ skewLeft, skewRight }) => {
      if (skewRight) {
        return 'transform: skewY(-20deg);';
      }
      if (skewLeft) {
        return 'transform: skewY(20deg);';
      }
      return null;
    }}

    ${({ theme }) => theme.mediaBreakpoints.md} {
      text-align: center;
    }
  }

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    padding: ${({ skewRight, skewLeft }) =>
      skewRight || skewLeft ? '300px 0' : '200px 0'};
  }

  ${({ theme }) => theme.mediaBreakpoints.md} {
    padding: ${({ skewRight, skewLeft }) =>
      skewRight || skewLeft ? '200px 0' : '150px 0'};
  }

`;

ContentBackgroundContainer.defaultProps = {
  color: 'primary',
};

export const ContentImage = styled.div`
  width: 100%;
  padding-top: 56.25%;
  background-image: url(${({ content }) => content});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  margin: 0 0 80px;
  transition: all 0.5s ease;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    margin: 0 0 50px;
  }

  ${({ theme }) => theme.mediaBreakpoints.md} {
    margin: 0 0 30px;
  }
`;

export const ProjectFooter = styled.footer`
  height: 350px;
  background: linear-gradient(180deg, rgba(220, 219, 219, 0) 0%, #dcdbdb 100%);
  position: relative;
`;

export const ProjectFooterInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 100px;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    flex-direction: column;
    text-align: center;

    & > div {
      margin-bottom: 10px;
    }
  }
`;

export const FooterActionWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const BackToTopButton = styled(Button)`
  &:before {
    content: '\u2191';
    display: block;
    font-size: 30px;
    margin-bottom: -5px;
    font-weight: ${({ theme }) => theme.font.weight.regular};
    transition: all 0.3s ease;
  }

  &:hover:before {
    margin-bottom: 0px;
    transform: scaleY(1.4);
  }
`;
