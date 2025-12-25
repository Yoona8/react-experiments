'use client';

import Image from 'next/image';
import styles from './EpicReactSearch.module.css';

export const EpicReactSearch = () => {
  return (<>
    <form>
      <p>
        <label htmlFor="search">Search:</label>
        <input id="search" type="search" name="search" />
      </p>
      <fieldset>
        <legend>Filters</legend>
        <label>
          <input type="checkbox" name="blueberry" /> 🫐 Blueberry
        </label>
        <label>
          <input type="checkbox" name="strawberry" /> 🍓 Strawberry
        </label>
        <label>
          <input type="checkbox" name="orange" /> 🍊 Orange
        </label>
      </fieldset>
      <button type="submit">Search</button>
    </form>
    <ul>
      <li>
        <article className={styles.article}>
          <Image
            src="/blueberry-mini-cake.png"
            alt="Blueberry Muffins"
            width={2816 }
            height={1536}
            className={styles.image}
          />
          <h2>Delicious Blueberry Dessert</h2>
          <p>A tasty treat made with fresh blueberries.</p>
        </article>
      </li>
    </ul>
  </>);
};