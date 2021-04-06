import React from 'react';
import PropTypes from 'prop-types';
import { PageContainer } from './PageTemplate.styles';

const PageTemplate = ({ children }) => (
  <PageContainer>{children}</PageContainer>
);

export default PageTemplate;

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
