import React from 'react';
import GlobalStyle from '../styles/GlobalStyles';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Logo />
    {children}
    <NavBar />
  </>
);

export default Layout;
