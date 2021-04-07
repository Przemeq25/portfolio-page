import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { BackgroundShapePrimary } from './Layout.style';
import MainTemplate from '../MainTemplate/MainTemplate';
import { GlobalStyles } from '../../themes/GlobalStyles';
import { theme } from '../../themes/theme';
import './index.css';

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BackgroundShapePrimary />
      <MainTemplate>{children}</MainTemplate>
    </ThemeProvider>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
