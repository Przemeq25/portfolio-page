import styled from 'styled-components';

export const ProjectContainer = styled.div`
  max-width: 1360px;
  width: 100%;
  margin: 0px auto;
  padding: 0 60px;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    padding: 0 60px;
  }
  ${({ theme }) => theme.mediaBreakpoints.md} {
    padding: 0 40px;
  }
  ${({ theme }) => theme.mediaBreakpoints.sm} {
    padding: 0 20px;
  }
`;
