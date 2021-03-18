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

export const Slide = styled.div`
  ${boxSize};
  background-image: url(${({ content }) => content});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
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
`;

export const ArrowsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    transform: translateY(-50%) rotate(-90deg) translateY(50%);
  }
`;
