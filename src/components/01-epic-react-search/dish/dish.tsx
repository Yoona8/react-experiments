'use client';

import Image from 'next/image';
import { IDish } from '@/data/dishes.data';
import styles from './dish.module.css';

interface DishProps {
  dish: IDish;
}

export const Dish = ({ dish }: DishProps) => {
  const { name, hook, dishDescription, drink, image } = dish;

  return <article className={styles.article}>
    <Image
      src={image}
      alt={name}
      width={2816}
      height={1536}
      className={styles.image}
    />
    <div className={styles.content}>
      <h2>{name}</h2>
      <p>{hook}</p>
      <p>{dishDescription}</p>
      <p><strong>Recommended Drink:</strong> {drink}</p>
    </div>
  </article>;
};