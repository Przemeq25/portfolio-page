import styled, { css } from 'styled-components';
import Heading from '../Heading/Heading';

export const Content = styled.article`
  position: relative;
`;

export const ContentTextWrapper = styled.div`
  position: relative;
`;

const pseudoElementLine = css`
  content: '';
  height: 5px;
  flex: 1 1 45%;
`;

export const HeadingWithLine = styled(Heading)`
  display: flex;
  align-items: center;
  margin: 0 0 30px;

  &:before {
    ${pseudoElementLine};
    margin-right: 20px;

    ${({ theme }) => theme.mediaBreakpoints.md} {
      flex: none;
      margin: 0 0 20px;
      width: 100px;
    }
  }
  &:after {
    ${pseudoElementLine};
    margin-left: 20px;
  }

  ${({ theme }) => theme.mediaBreakpoints.md} {
    flex-direction: column;
  }
`;

export const ContentBackgroundContainer = styled.div`
  background: ${({ theme, color }) => theme.colors.background[color]};
  display: flex;
  align-items: center;
  padding: ${({ skewRight, skewLeft }) =>
    skewRight || skewLeft ? '350px 0' : '250px 0'};
  position: relative;
  margin-bottom: -50px;
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
