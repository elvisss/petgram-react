import React from 'react';
import { Router } from '@reach/router';
import GlobalStyle from './styles/GlobalStyles';
import Logo from './components/Logo';
import PhotoCardWithQuery from './container/PhotoCardWithQuery';
import Home from './pages/Home';

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return (
    <>
      <Logo />
      <GlobalStyle />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Home path="/" />
          <Home path="/pet/:id" />
        </Router>
      )}
    </>
  );
};

export default App;
