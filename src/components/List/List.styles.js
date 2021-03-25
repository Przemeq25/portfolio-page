import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 30px;
`;

export const ListItem = styled.li`
  font-size: ${({ theme }) => theme.font.size.desktop.sm};
  font-weight: ${({ theme }) => theme.font.weight.light};
  padding-bottom: 5px;

  &::before {
    content: '';
    width: 10px;
    height: 3px;
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 5px 5px 5px 0;
  }

  ${({ theme }) => theme.mediaBreakpoints.md} {
    font-size: ${({ theme }) => theme.font.size.mobile.sm};
  }
`;
