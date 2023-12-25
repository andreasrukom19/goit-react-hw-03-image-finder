import { Searchbar } from 'components/Searchbar/Searchbar';
import React, { Component } from 'react';
import { onDataSearch } from 'services/api';

export class App extends Component {
  state = {
    dataImages: null,
    status: 'idle',
    error: null,
    searchValue: '',
    page: 1,
  }

  handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.searchInput.value;

    this.setState({ searchValue: inputValue });
    event.currentTarget.reset();
  }

  fetchImagesByQuery = async (page, searchValue) => {
    try {
      this.setState({ status: 'pending' });
      const requestData = await onDataSearch(page, searchValue);
      console.log(requestData);
      this.setState({ dataImages: requestData, status: 'success' });
    } catch (error) {
      this.setState({ error: error.message, status: 'error' });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue || prevState.page !== this.state.page) {
      this.fetchImagesByQuery(this.state.page, this.state.searchValue);
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

