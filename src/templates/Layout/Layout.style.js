import styled, { css } from 'styled-components';

const shapeStyle = css`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const BackgroundShapePrimary = styled.div`
  ${shapeStyle}
  clip-path: polygon(0 0, 30% 0, 120% 100%, 0 70%);
  background-color: ${({ theme }) => theme.colors.background.secondary};
  z-index: -1;
  ${({ theme }) => theme.mediaBreakpoints.sm} {
    display: none;
  }
`;

export const BackgroundShapeSecondary = styled.div`
  ${shapeStyle}
  clip-path: polygon(100% 73%, 0% 100%, 100% 100%);
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  z-index: -2;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    display: none;
  }
`;
