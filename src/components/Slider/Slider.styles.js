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
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  ${boxSize};
`;

export const Slide = styled.div`
  ${boxSize};
  background-image: url(${({ content }) => content});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Arrow = styled.div`
  border: solid ${({ theme }) => theme.colors.contrastText};
  border-width: 0 10px 10px 0;
  display: inline-block;
  padding: 10px;
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
