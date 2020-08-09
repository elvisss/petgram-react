import React from 'react';
import ListOfCategories from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';
import PageLayout from '../components/PageLayout';

const HomePage = ({ categoryId }) => (
  <PageLayout
    title="Tu app de fotos de mascotas"
    subtitle="Fotos de animales domésticos"
  >
    <ListOfCategories />
    <ListOfPhotoCards categoryId={categoryId} />
  </PageLayout>
);

const Home = React.memo(
  HomePage,
  (prevProps, props) => prevProps.categoryId === props.categoryId,
);

export default Home;
