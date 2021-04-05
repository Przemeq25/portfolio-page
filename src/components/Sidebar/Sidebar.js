import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { SidebarLink, SidebarLinks, SidebarWrapper } from './Sidebar.styles';
import { menuData } from '../../data/menuData';

gsap.registerPlugin(ScrollToPlugin);

const Sidebar = ({ close }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sidebarRef.current,
      { x: 100, autoAlpha: 0 },
      {
        ease: 'easeInOut',
        duration: 0.6,
        x: 0,
        autoAlpha: 1,
      },
    );
  }, []);

  return (
    <SidebarWrapper ref={sidebarRef}>
      <SidebarLinks>
        {menuData.map(({ title, link }) => (
          <SidebarLink
            exit={{ delay: 0.6 }}
            entry={{ trigger: () => gsap.to(window, { scrollTo: 'main' }) }}
            to={link}
            key={title}
            light
            activeClassName="active"
            onClick={close}
          >
            {title}
          </SidebarLink>
        ))}
      </SidebarLinks>
    </SidebarWrapper>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  close: PropTypes.func.isRequired,
};
