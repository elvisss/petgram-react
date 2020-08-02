import React from 'react';
import PhotoCard from '../PhotoCard';

const ListOfPhotoCards = () => (
  <ul>
    {[1, 2, 3, 4, 5].map((id) => (
      <PhotoCard key={id} />
    ))}
  </ul>
);

export default ListOfPhotoCards;
