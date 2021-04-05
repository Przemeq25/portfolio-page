import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink';
import styled from 'styled-components';
import { NavLinkStyle } from '../Header/Header.style';

export const SidebarWrapper = styled.div`
  background: rgba(0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
`;

export const SidebarLinks = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  > * {
    margin: 10px 0;
  }
`;

export const SidebarLink = styled(TransitionLink)`
  ${NavLinkStyle};
`;
