import React from 'react';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ inputValue: event.currentTarget.elements.searchInput.value.toLowerCase().trim() });
    event.currentTarget.reset();
  }

  return (
    <header className={css.searchbar}>
      <form className={css['search-form']} onSubmit={handleSubmit}>
        <button type="submit" className={css['search-form-button']}>
          <span className={css['form-button-label']}></span>
        </button>

        <input
          className={css['search-form-input']}
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          required
        />
      </form>
    </header>
  )
}