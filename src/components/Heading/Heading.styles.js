import styled from 'styled-components';

export const StyledHeading = styled.h1`
  position: relative;
  text-transform: ${({ transform }) =>
    transform === 'uppercase' ? 'uppercase' : 'capitalize'};
  margin-bottom: ${({ margin }) => margin}px;
  font-size: ${({ theme, size }) => theme.font.size.desktop[size]};
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ theme, weight }) => theme.font.weight[weight]};

  ${({ theme }) => theme.mediaBreakpoints.md} {
    font-size: ${({ theme, size }) => theme.font.size.mobile[size]};
    margin-bottom: ${({ margin }) => margin}px;
  }
`;
