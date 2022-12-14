import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ pics, showModal }) => {
  return (
    <List>
      {pics.map(pic => {
        // console.log(pic);
        return (
          <ImageGalleryItem
            key={pic.id}
            webformatURL={pic.webformatURL}
            tags={pic.tags}
            largeImageURL={pic.largeImageURL}
            showModal={showModal}
          />
        );
      })}
    </List>
  );
};

ImageGallery.propTypes = {
  pics: PropTypes.arrayOf(PropTypes.object).isRequired,
  showModal: PropTypes.func.isRequired,
};
