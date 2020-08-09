import React from 'react';
import { Grid, Image, Link } from './styles';

const ListOfFavs = ({ favs = [] }) => (
  <Grid>
    {favs.map((fav) => (
      <Link key={fav.id} to={`/detail/${fav.id}`}>
        <Image alt={fav.id} key={fav.id} src={fav.src} />
      </Link>
    ))}
  </Grid>
);

export default ListOfFavs;
