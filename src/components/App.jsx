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
    isLoading: false,
    showModal: false,
    showLoadMoreBtn: false,
    largeImageURL: DefaultPic,
    imageTags: null,
  };

  onSubmit = FormData => {
    const { query } = FormData;
    this.setState({ searchQuery: query });
    this.setState({ pageStart: 1 });
    this.fetchQuery(query, 1);
  };

  fetchQuery = (query, page) => {
    try {
      this.setState({ isLoading: true });

      fetchData(query, page).then(result => {
        const data = result.data;
        const total = data.totalHits;
        const picsArr = data.hits;

        this.setState({ picsArr: picsArr });

        const picsLeft = total - 12 * this.state.pageStart;

        if (this.state.searchQuery === '') {
          return Notiflix.Notify.warning(
            'Please enter key words for search.',
            notifySettings
          );
        }

        if (picsArr.length > 0 && this.state.pageStart === 1) {
          Notiflix.Notify.success(
            `Hooray! We found ${total} images.`,
            notifySettings
          );
        }

        if (
          this.state.showLoadMoreBtn &&
          this.state.pageStart > 1 &&
          picsLeft > 0
        ) {
          Notiflix.Notify.success(
            `${picsLeft} more images to show`,
            notifySettings
          );
        }

        if (picsArr.length === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.',
            notifySettings
          );
          return;
        }

        if (picsLeft > 0) {
          this.setState({ showLoadMoreBtn: true });
          this.setState(prevState => ({
            pageStart: this.state.pageStart + 1,
          }));
        } else {
          Notiflix.Notify.info(
            `This is the last page. No more images to show`,
            notifySettings
          );
          this.setState({ showLoadMoreBtn: false });
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

  onLoadMoreBtnClick = () => {
    this.fetchQuery(this.state.searchQuery, this.state.pageStart);
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
            <Btn
              status="load"
              text="Load more"
              page={this.changePage}
              onClick={this.onLoadMoreBtnClick}
            />
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
