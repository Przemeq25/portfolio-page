import * as React from 'react';
import PropTypes from 'prop-types';
import { BackgroundShapePrimary } from './Layout.style';
import MainTemplate from '../MainTemplate/MainTemplate';
import './index.css';

const Layout = ({ children }) => (
  <>
    <BackgroundShapePrimary />
    <MainTemplate>{children}</MainTemplate>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
