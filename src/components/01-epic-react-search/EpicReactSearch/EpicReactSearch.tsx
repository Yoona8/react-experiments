import { useState } from 'react';

import { Dish } from '../Dish/Dish';
// import { DishFilter } from '../01-epic-react-search/dish-filter/dish-filter';

import { dishesData } from '../../../data/dishes.data';
// import { dishesFiltersData } from '@/data/dishes-filters.data';

import './EpicReactSearch.css';

export const EpicReactSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onCheckFlavor = (tag: string, checked: boolean) => {
    if (checked) {
      setSearchQuery((prev) => `${prev} ${tag}`.trim());
    } else {
      setSearchQuery((prev) => prev.replace(tag, '').trim());
    }
  };

  return (<div className="epic-react-search">
    <form className="search-form">
      <h2>Search Your Favorite</h2>
      <p>
        <label className="search-label" htmlFor="search-input">Search:</label>
        <input 
          id="search-input" 
          type="search" 
          name="search"
          value={searchQuery}
          onChange={(evt) => setSearchQuery(evt.target.value)}
        />
      </p>
      <fieldset className="fieldset">
        <legend>Filter by flavor:</legend>
        <ul className="checkboxes">
          {/* {dishesFiltersData.map((filter) => (
            <li key={filter.id}>
              <DishFilter
                filter={filter}
                onCheckFlavor={onCheckFlavor}
              />
            </li>
          ))} */}
        </ul>
      </fieldset>
      <button type="submit">Search</button>
    </form>
    <ul className="dishes">
      {dishesData
        .filter((dish) => dish.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .map((dish) => <li key={dish.id}>
          <Dish dish={dish} />
        </li>)
      }
    </ul>
  </div>);
};