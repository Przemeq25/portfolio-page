import React from 'react';
import { HeaderWrapper, NavbarLink, NavbarLinks } from './Header.style';
import { menuData } from '../../data/menuData';

const Header = () => (
  <HeaderWrapper>
    <h2>PCichoń</h2>
    <NavbarLinks>
      {menuData.map(({ title, link }) => (
        <NavbarLink to={link} activeClassName="active">
          {title}
        </NavbarLink>
      ))}
    </NavbarLinks>
  </HeaderWrapper>
);
export default Header;
