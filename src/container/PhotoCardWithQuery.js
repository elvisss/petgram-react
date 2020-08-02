/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import PhotoCard from '../components/PhotoCard';

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {({ loading, data = {} }) => {
      if (loading) return null;
      const { photo = {} } = data;
      return <PhotoCard {...photo} />;
    }}
  </Query>
);

export default PhotoCardWithQuery;
