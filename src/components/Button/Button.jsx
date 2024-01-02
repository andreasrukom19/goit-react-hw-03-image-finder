import React from 'react';
import css from '../Button/Button.module.css';

export const Button = ({ onLoadMore }) => {
  return (
    <div className={css['btn-container']}>
      <button type="button" className={css.Button} onClick={onLoadMore}>Load more</button>
    </div>
  )
}
