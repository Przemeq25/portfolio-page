import styled from 'styled-components';

export const StyledParagraph = styled.p`
  font-size: ${({ theme, size }) => theme.font.size.desktop[size]};
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ theme, weight }) => theme.font.weight[weight]};
  margin-bottom: ${({ margin }) => margin}px;
  line-height: 1.5;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    font-size: ${({ theme, size }) => theme.font.size.mobile[size]};
  }
`;
