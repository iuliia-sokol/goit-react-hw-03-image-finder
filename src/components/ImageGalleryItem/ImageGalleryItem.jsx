import PropTypes from 'prop-types';
import { ListItem, Pic } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ tags, webformatURL, largeImageURL }) => {
  return (
    <ListItem>
      <div>
        <a href={largeImageURL}>
          <div>
            <Pic src={webformatURL} alt={tags} loading="lazy" />
          </div>
        </a>
      </div>
    </ListItem>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  //   onDeleteBtnClick: PropTypes.func.isRequired,
};
