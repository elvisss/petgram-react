import React from 'react';
import FavsWithQuery from '../container/GetFavorites';
import PageLayout from '../components/PageLayout';

const Favs = () => (
  <PageLayout title="Tus Favoritos" subtitle="Fotos de tus animales favoritos">
    <FavsWithQuery />
  </PageLayout>
);

export default Favs;
