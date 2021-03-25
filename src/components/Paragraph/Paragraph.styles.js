import styled from 'styled-components';

export const StyledParagraph = styled.p`
  font-size: ${({ theme, size }) => theme.font.size.desktop[size]};
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ theme, weight }) => theme.font.weight[weight]};
  line-height: 28px;
  text-align: justify;
  margin-bottom: ${({ margin }) => margin}px;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    font-size: ${({ theme, size }) => theme.font.size.mobile[size]};
    margin-bottom: ${({ margin }) => margin - 10}px;
  }
`;
