import { Searchbar } from 'components/Searchbar/Searchbar';
import React, { Component } from 'react';
import { onDataSearch } from 'services/api';
import Notiflix from 'notiflix';
import { Loader } from 'components/Loader/Loader';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    dataImages: null,
    status: 'idle',
    error: null,
    searchValue: '',
    page: 1,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue || prevState.page !== this.state.page) {
      this.fetchImagesByQuery(this.state.page, this.state.searchValue)
        .then(data => {
          this.setState(prevState => (
            prevState.dataImages ? {dataImages: [...prevState.dataImages, ...data.hits]} : {dataImages: data.hits}
          ))
        });
    }
  }

  onSubmitForm = formData => {
    if (formData.inputValue === this.state.searchValue) {
      Notiflix.Notify.warning('You are making a similar request!')
    }
    this.setState({
      searchValue: formData.inputValue,
      dataImages: null,
      page: 1,
    });
  }

  fetchImagesByQuery = async (page, searchValue) => {
    try {
      this.setState({ status: 'pending' });
      const requestData = await onDataSearch(page, searchValue);
      this.setState({status: 'resolved'});
      return requestData;
    } catch (error) {
      this.setState({ error: error.message, status: 'rejected' });
    }
  }

  render() {
    const { status, dataImages, } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onSubmitForm} />
        {status === 'rejected' && Notiflix.Notify.failure('Oops, the image cannot be loaded')}
        {status === 'pending' && Array.isArray(dataImages) && <Loader />}
        {Array.isArray(dataImages) && dataImages.length === 0 && Notiflix.Notify.info('Nothing was found for your request', {
          distance: '70px',
          fontSize: '18px',
          width: '400px',
          position: 'center-top'
        })}
        {status === 'resolved' && Array.isArray(dataImages) && 
          <ImageGallery images={ this.state.dataImages } />
        }
      </div>
    )
  }
}

