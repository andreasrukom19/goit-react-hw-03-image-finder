import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import css from '../ImageGallery/ImageGallery.module.css';

export const ImageGallery = ({images, handleShowImage}) => {
  return (
    <ul className={css['image-gallery']}>
      {images?.map(image => (
        <ImageGalleryItem
          key={image.id}
          id={image.id}
          url={image.webformatURL}
          description={image.user}
          handleShowImage={handleShowImage}
        />))}
    </ul>
  )
}
