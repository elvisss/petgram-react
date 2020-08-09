import React from 'react';
import PhotoCardWithQuery from '../container/PhotoCardWithQuery';
import PageLayout from '../components/PageLayout';

const Detail = ({ detailId }) => (
  <PageLayout title={`Fotografía ${detailId}`}>
    <PhotoCardWithQuery id={detailId} />
  </PageLayout>
);

export default Detail;
