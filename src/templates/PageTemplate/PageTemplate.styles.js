import styled from 'styled-components';

export const PageContainer = styled.section`
  margin: 0 100px;
  max-width: 800px;

  ${({ theme }) => theme.mediaBreakpoints.lg} {
    margin: 50px 10px 20px;
  }

  ${({ theme }) => theme.mediaBreakpoints.md} {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
