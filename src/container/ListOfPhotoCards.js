/* eslint-disable import/prefer-default-export */
import withPhotos from '../hoc/withPhotos';
import ListOfPhotoCardsComponent from '../components/ListOfPhotoCards';

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
