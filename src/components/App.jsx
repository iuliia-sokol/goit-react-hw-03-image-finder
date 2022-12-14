import React from 'react';
import Notiflix from 'notiflix';

import { fetchData } from '../fetch';

import { Container } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Btn } from './Button/Button';
import DefaultPic from '../images/defaultPic.jpg';

const notifySettings = {
  width: '380px',
  position: 'right-top',
  distance: '10px',
  opacity: 1,
  fontSize: '20px',
  borderRadius: '12px',
};

export class App extends React.Component {
  state = {
    searchQuery: '',
    pageStart: 1,
    picsArr: [],
    picsLeft: 0,
    isLoading: false,
    showModal: false,
    showLoadMoreBtn: false,
    largeImageURL: DefaultPic,
    imageTags: null,
  };

  onSubmit = FormData => {
    const { query } = FormData;
    this.setState({ searchQuery: query });

    console.log(this.state.searchQuery);

    this.fetchQuery(query);
  };

  fetchQuery = query => {
    // console.log(this.state.searchQuery);
    try {
      this.setState({ isLoading: true });

      fetchData(query, this.state.pageStart).then(result => {
        const data = result.data;
        const total = data.totalHits;

        const picsArr = data.hits;

        this.setState({ picsArr: picsArr });

        const picsLeft = total - picsArr.length * this.state.pageStart;
        this.setState({ picsLeft: picsLeft });
        // console.log(picsLeft);

        if (this.state.searchQuery === '') {
          return Notiflix.Notify.warning(
            'Please enter key words for search.',
            notifySettings
          );
        }

        if (picsArr.length > 0) {
          Notiflix.Notify.success(
            `Hooray! We found ${total} images.`,
            notifySettings
          );
        }

        if (picsArr.length === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.',
            notifySettings
          );
          // refs.gallery.innerHTML = '';
          // refs.loadMoreBtn.classList.add('is-hidden');
          return;
        }

        if (picsLeft > 0) {
          this.setState({ showLoadMoreBtn: true });
          this.setState(prevState => ({
            pageStart: this.state.pageStart + 1,
          }));
        }
      });
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure(
        'Sorry, something went wrong, please try again later',
        notifySettings
      );
    } finally {
      this.setState({ isLoading: false });
    }
  };

  toggleModal = (largeImageURL, imageTags) => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImageURL: largeImageURL,
      imageTags: imageTags,
    }));
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <Container>
          <ImageGallery
            pics={this.state.picsArr}
            showModal={this.toggleModal}
          />
          {this.state.showLoadMoreBtn && (
            <Btn status="load" text="Load more" page={this.changePage} />
          )}
        </Container>
        {this.state.isLoading && <Loader />}
        {this.state.showModal && (
          <Modal
            src={this.state.largeImageURL}
            alt={this.state.imageTags}
            closeModal={this.toggleModal}
          />
        )}
      </>
    );
  }
}
