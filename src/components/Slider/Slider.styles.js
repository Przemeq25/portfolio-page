import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink';
import styled, { css } from 'styled-components';
import { buttonStyles } from '../Button/Button.style';

const boxSize = css`
  width: 100%;
  height: 100%;
`;

export const SliderWrapper = styled.div`
  ${boxSize};
  position: relative;
  overflow: hidden;
  box-shadow: rgba(38, 57, 77, 0.5) 0px 20px 30px -10px;
  border-radius: 2px;
  background: rgb(26, 26, 26);
  min-height: 400px;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    height: calc(100vh - 20px);
  }
`;

export const SliderContent = styled.div`
  ${boxSize};
  position: relative;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    display: flex;
    transform: translateX(-${({ translate }) => translate}px);
  }
`;

export const SlideItem = styled.div`
  ${boxSize};
  background-image: url(${({ content }) => content});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Arrow = styled.div`
  border: solid ${({ theme }) => theme.colors.contrastText};
  border-width: 0 10px 10px 0;
  display: inline-block;
  padding: 15px;
  border-radius: 3px;
  transform: ${({ direction }) =>
    direction === 'up' ? 'rotate(-135deg)' : 'rotate(45deg)'};
  transition: 300ms all ease-in;
  cursor: pointer;

  &.activated {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: ${({ direction }) =>
      direction === 'up'
        ? 'translateY(-5px) scale(0.9) rotate(-135deg)'
        : 'translateY(5px) scale(0.9) rotate(45deg)'};
  }

  ${({ theme }) => theme.mediaBreakpoints.md} {
    border-width: 0 8px 8px 0;
    padding: 10px;
  }

  ${({ theme }) => theme.mediaBreakpoints.sm} {
    border-width: 0 5px 5px 0;
    padding: 8px;
  }
`;

export const ArrowsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50px;
  display: flex;
  flex-direction: column;
  transform: translateY(-50%);

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    transform: translateY(-50%) rotate(-90deg) translateY(10%);
  }

  ${({ theme }) => theme.mediaBreakpoints.md} {
    left: 50px;
  }

  ${({ theme }) => theme.mediaBreakpoints.sm} {
    left: 20px;
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  padding: 30px 10px 30px 150px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    justify-content: flex-end;
    padding-left: 50px;
  }

  ${({ theme }) => theme.mediaBreakpoints.sm} {
    justify-content: flex-end;
    padding-left: 20px;
  }
`;

export const SliderCounterWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  ddisplay: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 80px;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    top: 20px;
    width: 40px;
  }
`;

export const SliderCounterItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 20px;

  &:after {
    content: '';
    height: 5px;
    width: 100%;
    border-radius: 2px;

    margin: 3px 0 5px ${({ currentSlide }) => (currentSlide ? '4px' : 0)};
    background-color: ${({ currentSlide, theme }) =>
      currentSlide ? theme.colors.primary : theme.colors.contrastText};

    ${({ theme }) => theme.mediaBreakpoints.md} {
      margin: 2px 0 2px ${({ currentSlide }) => (currentSlide ? '4px' : 0)};
    }
  }
`;

export const SliderCounterItemParagraph = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.size.desktop.xs};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  display: ${({ currentSlide }) => (currentSlide ? 'block' : 'none')};

  ${({ theme }) => theme.mediaBreakpoints.md} {
    font-size: ${({ theme }) => theme.font.size.mobile.xs};
  }
`;

export const LinkButton = styled(TransitionLink)`
  ${buttonStyles};
`;
