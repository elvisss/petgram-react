import React from 'react';
import PropTypes from 'prop-types';
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

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ListOfFavs;
