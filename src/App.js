import React from 'react';
import { Router } from '@reach/router';
import GlobalStyle from './styles/GlobalStyles';
import Logo from './components/Logo';
import Home from './pages/Home';
import Detail from './pages/Detail';

const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <Router>
      <Home path="/" />
      <Home path="/pet/:categoryId" />
      <Detail path="/detail/:detailId" />
    </Router>
  </>
);

export default App;
