import React from 'react';
import ListOfCategories from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';

const Home = ({ categoryId }) => (
  <>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </>
);

export default Home;
