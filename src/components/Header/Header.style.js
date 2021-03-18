import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

export const HeaderWrapper = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const NavbarLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  ${({ theme }) => theme.mediaBreakpoints.sm} {
    display: none;
  }
`;

const lineTroughAnimation = keyframes`
  0% { width: 0; }
  100% { width: calc(100% - 30px); }
`;

export const NavbarLink = styled(Link)`
  font-size: ${({ theme }) => theme.font.size.desktop.md};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  padding-left: 30px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: 200ms all ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  &.active {
    position: relative;

    &:after {
      content: '';
      top: 50%;
      left: 0;
      position: absolute;
      transform: translate(30px, -50%);
      border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
      border-radius: 2px;
      animation: ${lineTroughAnimation} 0.3s 0s forwards;
    }

    @keyframes sheen {
      100% {
        transform: rotateZ(60deg) translate(1em, -9em);
      }
    }
  }
`;
