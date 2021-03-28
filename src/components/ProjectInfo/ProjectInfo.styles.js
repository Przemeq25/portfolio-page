import styled from 'styled-components';
import Paragraph from '../Paragraph/Paragraph';

export const ProjectInfoWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding: 40px 0;

  ${({ theme }) => theme.mediaBreakpoints.sm} {
    padding: 20px 0;
  }
`;

export const ProjectInfoList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;

  ${({ theme }) => theme.mediaBreakpoints.sm} {
    flex-direction: column;
    align-items: space-around;
  }
`;

export const ProjectInfoListItem = styled.li`
  flex: 1 1 30%;

  ${({ theme }) => theme.mediaBreakpoints.sm} {
    margin: 20px 0;
  }
`;

export const ProjectInfoListItemText = styled(Paragraph)`
  text-align: center !important;
  text-transform: capitalize;
`;
