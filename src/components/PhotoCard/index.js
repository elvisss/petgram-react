/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { Article, ImgWrapper, Img } from './styles';
import useNearScreen from '../../hooks/useNearScreen';
import FavButton from '../FavButton';
import ToggleLikeMutation from '../../container/ToggleLikeMutation';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

const PhotoCard = ({ id, liked, likes, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="" />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleFavClick = () => {
                toggleLike({ variables: { input: { id } } });
              };
              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />
              );
            }}
          </ToggleLikeMutation>
        </>
      )}
    </Article>
  );
};

PhotoCard.defaultProps = {
  likes: 0,
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: (props, propName, componentName) => {
    let error;
    const propValue = props[propName];
    if (propValue === undefined) {
      error = new Error(`${componentName} value must be defined`);
    }

    if (propValue < 0) {
      error = new Error(`${componentName} value must be greater than 0`);
    }
    return error;
  },
};

export default PhotoCard;
