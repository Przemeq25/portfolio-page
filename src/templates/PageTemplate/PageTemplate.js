import React from 'react';
import { PageContainer } from './PageTemplate.styles';

const PageTemplate = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

export default PageTemplate;
