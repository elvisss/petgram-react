/* eslint-disable no-confusing-arrow */
import React from 'react';
import { Router } from '@reach/router';
import Layout from './layout';
import Home from './pages/Home';
import User from './pages/User';
import Favs from './pages/Favs';
import NotRegisteredUser from './pages/NotRegisteredUser';
import Detail from './pages/Detail';

const UserLogged = ({ children }) => children({ isAuth: false });

const App = () => (
  <Layout>
    <Router>
      <Home path="/" />
      <Home path="/pet/:categoryId" />
      <Detail path="/detail/:detailId" />
    </Router>
    <UserLogged>
      {
        ({ isAuth }) => isAuth
          ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
      }
    </UserLogged>
  </Layout>
);

export default App;
