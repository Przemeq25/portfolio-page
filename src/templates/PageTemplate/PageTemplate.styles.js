import styled from 'styled-components';

export const PageContainer = styled.section`
  margin: 100px 200px;
  max-width: 800px;

  ${({ theme }) => theme.mediaBreakpoints.xl} {
    margin: 100px 80px;
  }

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    margin: 100px 50px;
  }
`;
