'use client';

import { useState } from 'react';

import { Dish } from './dish/dish';
import { DishFilter } from './dish-filter/dish-filter';

import { dishesData } from '@/data/dishes.data';
import { dishesFiltersData } from '@/data/dishes-filters.data';

import styles from './epic-react-search.module.css';

export const EpicReactSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onCheckFlavor = (tag: string, checked: boolean) => {
    if (checked) {
      setSearchQuery((prev) => `${prev} ${tag}`.trim());
    } else {
      setSearchQuery((prev) => prev.replace(tag, '').trim());
    }
  };

  return (<div className={styles.wrapper}>
    <form className={styles.searchForm} >
      <h2>Search Your Favorite</h2>
      <p>
        <label className={styles.searchLabel} htmlFor="search-input">Search:</label>
        <input 
          id="search-input" 
          type="search" 
          name="search"
          value={searchQuery}
          onChange={(evt) => setSearchQuery(evt.target.value)}
        />
      </p>
      <fieldset className={styles.fieldset}>
        <legend>Filter by flavor:</legend>
        <ul className={styles.checkboxes}>
          {dishesFiltersData.map((filter) => (
            <li key={filter.id}>
              <DishFilter
                filter={filter}
                onCheckFlavor={onCheckFlavor}
              />
            </li>
          ))}
        </ul>
      </fieldset>
      <button type="submit">Search</button>
    </form>
    <ul className={styles.dishes}>
      {dishesData
        .filter((dish) => dish.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .map((dish) => <li key={dish.id}><Dish dish={dish} /></li>)
      }
    </ul>
  </div>);
};