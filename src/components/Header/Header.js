import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import gsap from 'gsap';
import {
  HeaderWrapper,
  NavbarLink,
  NavbarLinks,
  Hamburger,
} from './Header.style';
import { menuData } from '../../data/menuData';
import Logo from '../Logo/Logo';
import Sidebar from '../Sidebar/Sidebar';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isSidebarOpen]);

  return (
    <HeaderWrapper>
      <Logo size="40px" />
      <NavbarLinks>
        {menuData.map(({ title, link }) => (
          <NavbarLink path={link} key={title} activeClassName="active">
            {title}
          </NavbarLink>
        ))}
      </NavbarLinks>
      <Hamburger
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        isOpen={isSidebarOpen}
      />

      <Transition
        mountOnEnter
        unmountOnExit
        in={isSidebarOpen}
        addEndListener={(node, done) => {
          gsap.to(node, {
            ease: 'easeInOut',
            duration: 0.6,
            x: isSidebarOpen ? 0 : 100,
            autoAlpha: isSidebarOpen ? 1 : 0,
            onComplete: done,
          });
        }}
      >
        <Sidebar close={() => setSidebarOpen(false)} />
      </Transition>
    </HeaderWrapper>
  );
};
export default Header;
