import * as React from 'react';
import PropTypes from 'prop-types';
import {
  BackgroundShapePrimary,
  BackgroundShapeSecondary,
} from './Layout.style';
import MainTemplate from '../MainTemplate/MainTemplate';

const Layout = ({ children }) => (
  <>
    <BackgroundShapePrimary />
    <BackgroundShapeSecondary />
    <MainTemplate>{children}</MainTemplate>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
