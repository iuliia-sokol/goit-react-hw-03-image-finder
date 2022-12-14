import PropTypes from 'prop-types';
import { ListItem, Pic } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  tags,
  webformatURL,
  largeImageURL,
  showModal,
}) => {
  return (
    <ListItem onClick={() => showModal(largeImageURL, tags)}>
      <div>
        <Pic src={webformatURL} alt={tags} loading="lazy" />
      </div>
    </ListItem>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};
