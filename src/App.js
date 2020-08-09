import React, { useContext } from 'react';
import { Router, Redirect } from '@reach/router';

import Layout from './layout';
import Home from './pages/Home';
import User from './pages/User';
import Favs from './pages/Favs';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import NotRegisteredUser from './pages/NotRegisteredUser';

import { Context } from './Context';

const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Layout>
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
    </Layout>
  );
};

export default App;
