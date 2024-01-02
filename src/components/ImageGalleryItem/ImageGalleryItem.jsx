import React from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, url, description }) => {
  return (
    <li id={id} className={css['image-gallery-item']}>
      <img src={url} alt={description} className={css['gallery-item-image']} />
    </li>
  )
}