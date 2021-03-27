import styled, { css } from 'styled-components';

const boxSize = css`
  width: 100%;
  height: 100%;
`;

export const SliderWrapper = styled.div`
  ${boxSize};
  position: relative;
  overflow: hidden;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 2px;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    height: 100vw;
  }
`;

export const SliderContent = styled.div`
  transform: translateY(-${({ translate }) => translate}px);
  transition: transform ease-out 200ms;
  ${boxSize};

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
  position: relative;
`;

export const Arrow = styled.div`
  border: solid ${({ theme }) => theme.colors.contrastText};
  border-width: 0 10px 10px 0;
  display: inline-block;
  padding: 15px;
  border-radius: 3px;
  transform: ${({ direction }) =>
    direction === 'up' ? 'rotate(-135deg)' : 'rotate(45deg)'};
  transition: 200ms all ease-in;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
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
  background: linear-gradient(
    138deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 0, 0, 0.6558824213279062) 0%,
    rgba(255, 255, 255, 0) 94%
  );
  transition: 200ms all ease-in;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    justify-content: flex-end;
    padding-left: 50px;
  }

  ${({ theme }) => theme.mediaBreakpoints.sm} {
    justify-content: flex-end;
    padding-left: 20px;
  }
`;

export const SlideParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.desktop.sm};
  color: ${({ theme }) => theme.colors.background.tertiary};
  font-weight: ${({ theme }) => theme.font.weight.light};
  letter-spacing: 2px;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    font-size: ${({ theme }) => theme.font.size.mobile.sm};
  }
`;

export const SlideTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.desktop.xl};
  color: ${({ theme }) => theme.colors.contrastText};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 2px;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    font-size: ${({ theme }) => theme.font.size.mobile.xl};
  }
`;

export const SliderCounterWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  ddisplay: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 60px;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    top: 20px;
    width: 40px;
  }
`;

export const SliderCounterItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 500ms width ease-in;

  &:after {
    transition: 500ms width ease-in;
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
