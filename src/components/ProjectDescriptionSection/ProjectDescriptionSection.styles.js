import styled from 'styled-components';

export const DescriptionSection = styled.section`
  padding: 200px 0;
  transition: all 0.3s ease-in-out;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    padding: 100px 0px;
`;

export const DescriptionWrappepr = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const DescriptionTextWrapper = styled.div`
  flex: 1 1 50%;
  margin: 50px 50px 50px 0px;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    margin: 50px 0;
    text-align: center;
  }
`;

export const DescrtiptionImage = styled.div`
  width: 50%;
  padding-top: 45%;
  background-image: url(${({ content }) => content});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: padding 0.3s ease;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    width: 80%;
    padding-top: 80%;
  }

  ${({ theme }) => theme.mediaBreakpoints.sm} {
    width: 90%;
    padding-top: 90%;
  }
`;
