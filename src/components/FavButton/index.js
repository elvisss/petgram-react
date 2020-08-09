/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import Button from './styles';

const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  return (
    <Button onClick={onClick} type="button">
      <Icon size="32px" /> {likes} likes!
    </Button>
  );
};

FavButton.defaultProps = {
  onClick: () => {},
};

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default FavButton;
