import React from 'react';
import PropTypes from 'prop-types';
import { TransitionLink } from 'gatsby-plugin-transition-link/components/TransitionLink';
import gsap from 'gsap';

const NavigationTransitionLink = ({ children, path, scroll, ...rest }) => {
  const exitAnimation = () => {
    gsap.to('main', { autoAlpha: 0 });
  };
  const entryAnimation = () => {
    gsap.to(window, { scrollTo: 'main' });
  };

  return (
    <TransitionLink
      {...rest}
      exit={{
        trigger: () => exitAnimation(),
        length: 1,
      }}
      entry={{
        trigger: () => scroll && entryAnimation(),
        delay: 1,
      }}
      to={path}
    >
      {children}
    </TransitionLink>
  );
};

export default NavigationTransitionLink;

NavigationTransitionLink.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  scroll: PropTypes.bool,
};

NavigationTransitionLink.defaultProps = {
  scroll: true,
};
