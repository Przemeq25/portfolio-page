import styled from 'styled-components';
import Button from '../Button/Button';

export const ProjectFooterWrapper = styled.footer`
  height: 350px;
  background: linear-gradient(180deg, rgba(220, 219, 219, 0) 0%, #dcdbdb 100%);
  position: relative;
`;

export const ProjectFooterInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 100px;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    flex-direction: column;
    text-align: center;

    & > div {
      margin-bottom: 10px;
    }
  }
`;

export const FooterActionWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const BackToTopButton = styled(Button)`
  &:before {
    content: '\u2191';
    display: block;
    font-size: 30px;
    margin-bottom: -5px;
    font-weight: ${({ theme }) => theme.font.weight.regular};
    transition: all 0.3s ease;
  }

  &:hover:before {
    margin-bottom: 0px;
    transform: scaleY(1.4);
  }
`;
