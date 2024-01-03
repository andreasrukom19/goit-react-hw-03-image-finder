import React from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, url, description, handleShowImage }) => {
  return (
    <li className={css['image-gallery-item']}>
      <img
        src={url}
        alt={description}
        className={css['gallery-item-image']}
        onClick={() => handleShowImage(id)}
      />
    </li>
  )
}