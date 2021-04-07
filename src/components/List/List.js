import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import { ListItem, StyledList } from './List.styles';

const List = ({ items }) => {
  const listRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [...listRef.current.children],
      { autoAlpha: 0, x: 20 },
      { autoAlpha: 1, x: 0, stagger: 0.2 },
    );
  }, []);

  return (
    <StyledList ref={listRef}>
      {items.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </StyledList>
  );
};
export default List;

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

List.defaultProps = {
  items: [],
};
