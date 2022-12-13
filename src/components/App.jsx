import React from 'react';
import Notiflix from 'notiflix';

import { fetchData } from '../fetch';

// import { Container } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

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
          // refs.loadMoreBtn.classList.remove('is-hidden');
        }

        // this.setState(prevState => ({
        //   pageStart: this.state.pageStart + 1,
        // }));
      });
    } catch {}
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery pics={this.state.picsArr}></ImageGallery>
      </div>
    );
  }
}
