import styled, { css, keyframes } from 'styled-components';
import NavigationTransitionLink from '../../providers/NavigationTransitionLink';

export const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  ${({ theme }) => theme.mediaBreakpoints.md} {
    display: none;
  }
`;

const hamburgerLine = css`
  content: '';
  position: absolute;
  display: block;
  width: 100%;
  height: 3px;
  background: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.contrastText : theme.colors.secondary};
  border-radius: 2px;
  transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
`;

export const Hamburger = styled.div`
  width: 30px;
  height: 15px;
  cursor: pointer;
  z-index: 1100;
  position: relative;
  display: none;

  &:before {
    ${hamburgerLine}
    ${({ isOpen }) => isOpen && 'transform: translateY(6px) rotateZ(45deg); '};
  }
  &:after {
    ${hamburgerLine}
    bottom: 0;
    ${({ isOpen }) =>
      isOpen && 'transform: translateY(-6px) rotateZ(-45deg); '};
  }

  ${({ theme }) => theme.mediaBreakpoints.md} {
    display: block;
  }
`;

export const lineTroughAnimation = keyframes`
  0% { width: 0; }
  100% { width: calc(100% - 30px); }
`;

export const NavLinkStyle = css`
  font-size: ${({ theme }) => theme.font.size.desktop.sm};
  color: ${({ theme, light }) =>
    light ? theme.colors.contrastText : theme.colors.secondary};
  font-weight: ${({ theme }) => theme.font.weight.medium};
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
  }
`;

export const NavbarLink = styled(NavigationTransitionLink)`
  ${NavLinkStyle};
`;
