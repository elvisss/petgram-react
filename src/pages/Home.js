import React from 'react';
import ListOfCategories from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';
import PageLayout from '../components/PageLayout';

const Home = ({ categoryId }) => (
  <PageLayout
    title="Tu app de fotos de mascotas"
    subtitle="Fotos de animales domésticos"
  >
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </PageLayout>
);

export default Home;
