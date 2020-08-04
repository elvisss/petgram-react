import React from 'react';
import { Router } from '@reach/router';
import Layout from './layout';
import Home from './pages/Home';
import Detail from './pages/Detail';

const App = () => (
  <Layout>
    <Router>
      <Home path="/" />
      <Home path="/pet/:categoryId" />
      <Detail path="/detail/:detailId" />
    </Router>
  </Layout>
);

export default App;
