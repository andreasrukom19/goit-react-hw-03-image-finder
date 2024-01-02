import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.wrapper}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="green"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  )
}
