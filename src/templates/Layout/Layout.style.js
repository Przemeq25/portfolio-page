import styled, { css } from 'styled-components';

const shapeStyle = css`
  width: 100%;
  height: 100vh;
  position: absolute;
`;

export const BackgroundShapePrimary = styled.div`
  ${shapeStyle}
  clip-path: polygon(0 0, 0 80%, 50% 0);
  background-color: ${({ theme }) => theme.colors.background.secondary};
  z-index: -1;
  transition: all 500ms ease;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    clip-path: polygon(0 0, 0 100%, 100% 0);
  }

  ${({ theme }) => theme.mediaBreakpoints.md} {
    display: none;
  }
`;

export const BackgroundShapeSecondary = styled.div`
  ${shapeStyle}
  bottom:0;
  right: 0;
  clip-path: polygon(100% 100%, 50% 100%, 100% 20%);
  background-color: ${({ theme }) => theme.colors.background.primary};
  z-index: -2;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    display: none;
  }
`;
