import styled from 'styled-components';
import Button from '../Button/Button';
import { buttonStyles } from '../Button/Button.style';

export const HeroImg = styled.div`
  height: 60vh;
`;

export const HeroSection = styled.section`
  min-height: 100vh;
`;

export const HeroWrapper = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    margin: 20px 0px;
  }
`;

export const LinksWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
`;

export const ButtonLink = styled(Button)`
  text-decoration: none;
  ${buttonStyles};
`;
