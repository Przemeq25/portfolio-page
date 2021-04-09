import styled from 'styled-components';
import Button from '../Button/Button';
import { buttonStyles } from '../Button/Button.style';

export const HeroImg = styled.div`
  height: 60vh;
  background: url(${({ content }) => content}) no-repeat center;
  background-size: cover;
`;

export const HeroSection = styled.section``;

export const HeroWrapper = styled.div`
  margin: 50px 0 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    margin: 30px 0px 80px;
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
