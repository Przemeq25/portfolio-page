import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, StyledList } from './List.styles';

const List = ({ items }) => (
  <StyledList>
    {items.map((item) => (
      <ListItem key={item}>{item}</ListItem>
    ))}
  </StyledList>
);

export default List;

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

List.defaultProps = {
  items: [],
};
