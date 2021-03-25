import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeading } from './Heading.styles';

const Heading = ({
  children,
  size,
  weight,
  color,
  variant,
  transform,
  margin,
}) => (
  <StyledHeading
    as={variant}
    size={size}
    weight={weight}
    color={color}
    transform={transform}
    margin={margin}
  >
    {children}
  </StyledHeading>
);

export default Heading;

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['lg', 'xl', 'title']),
  weight: PropTypes.oneOf(['medium', 'bold', 'black']),
  color: PropTypes.oneOf(['primary', 'secondary', 'contrastText']),
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  transform: PropTypes.oneOf(['uppercase', 'capitalize']),
  margin: PropTypes.number,
};

Heading.defaultProps = {
  size: 'title',
  weight: 'medium',
  color: 'secondary',
  variant: 'h1',
  transform: 'uppercase',
  margin: 0,
};
