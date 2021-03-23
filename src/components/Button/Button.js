import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.style';

const Button = ({ light, children, small }) => (
  <StyledButton light={light} small={small}>
    {children}
  </StyledButton>
);
export default Button;

Button.propTypes = {
  light: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  light: false,
  small: false,
};
