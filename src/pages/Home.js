import React from 'react';
import ListOfCategories from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';

const Home = ({ id }) => (
  <>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </>
);

export default Home;
