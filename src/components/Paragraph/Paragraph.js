import React from 'react';
import PropTypes from 'prop-types';
import { StyledParagraph } from './Paragraph.styles';

const Paragraph = ({ children, size, weight, color, margin, ...rest }) => (
  <StyledParagraph
    size={size}
    weight={weight}
    color={color}
    margin={margin}
    {...rest}
  >
    {children}
  </StyledParagraph>
);

export default Paragraph;

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  weight: PropTypes.oneOf(['light', 'regular', 'medium', 'bold', 'black']),
  color: PropTypes.oneOf(['primary', 'secondary', 'contrastText']),
  margin: PropTypes.number,
};

Paragraph.defaultProps = {
  size: 'md',
  weight: 'regular',
  color: 'secondary',
  margin: 0,
};
