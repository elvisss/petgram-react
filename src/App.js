import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import ListOfCategories from './components/ListOfCategories';
import { ListOfPhotoCards } from './container/ListOfPhotoCards';
import Logo from './components/Logo';
import PhotoCardWithQuery from './container/PhotoCardWithQuery';

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
        <>
          <ListOfCategories />
          <ListOfPhotoCards />
        </>
      )}
    </>
  );
};

export default App;
