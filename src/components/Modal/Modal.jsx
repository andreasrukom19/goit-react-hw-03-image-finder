import React, { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }
  
  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.handleCloseModal();
    }
  }

  handleKeyPress = event => {
    if (event.code === 'Escape') {
      this.props.handleCloseModal();
    }
  }
  
  render() {
    const { modalData } = this.props;
    return (
      <div className={css.backdrop} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src={modalData.largeImageURL} alt={modalData.tags} />
        </div>
      </div>
    )
  }
}
