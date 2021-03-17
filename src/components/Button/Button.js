import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.style';

const Button = ({ light, text }) => (
  <StyledButton light={light}>{text}</StyledButton>
);
export default Button;

Button.propTypes = {
  light: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  light: false,
};
