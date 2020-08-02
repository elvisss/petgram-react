/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PhotoCard from '../PhotoCard';

const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => (
  <ul>
    {photos.map((photo) => (
      <PhotoCard key={photo.id} id={photo.id} {...photo} />
    ))}
  </ul>
);

export default ListOfPhotoCardsComponent;
