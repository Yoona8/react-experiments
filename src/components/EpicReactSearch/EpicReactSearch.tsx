'use client';

import { dessertsData } from '@/data/desserts.data';
import { DessertEntry } from './DessertEntry';
import styles from './EpicReactSearch.module.css';
import { useState } from 'react';

export const EpicReactSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (<div className={styles.wrapper}>
    <form className={styles.searchForm} >
      <h2>Search Your Favorite</h2>
      <p>
        <label htmlFor="search-input">Search:</label>
        <input 
          id="search-input" 
          type="search" 
          name="search"
          onChange={(evt) => setSearchQuery(evt.target.value)}
        />
      </p>
      <fieldset className={styles.fieldset}>
        <legend>Filter by flavor:</legend>
        <ul className={styles.checkboxes}>
          <li>
            <label>
              <input type="checkbox" name="flavor" value="blueberry" /> 🫐 Blueberry
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="flavor" value="strawberry" /> 🍓 Strawberry
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="flavor" value="orange" /> 🍊 Orange
            </label>
          </li>
        </ul>
        
      </fieldset>
      <button type="submit">Search</button>
    </form>
    <ul className={styles.desserts}>
      {dessertsData
        .filter((dessert) => dessert.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .map((dessert) => <li key={dessert.id}><DessertEntry dessert={dessert} /></li>)
      }
    </ul>
  </div>);
};