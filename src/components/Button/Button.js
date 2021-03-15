import React from 'react'
import PropTypes from "prop-types";
import { StyledButton } from './Button.style';

export const Button = ({light, text}) => {
    return (
        <StyledButton light={light}>
            {text}
        </StyledButton>
            
    )
}

Button.propTypes = {
    light: PropTypes.bool,
    text: PropTypes.string.isRequired,
  }