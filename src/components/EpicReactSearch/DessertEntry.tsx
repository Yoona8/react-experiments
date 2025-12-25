'use client';

import Image from 'next/image';
import styles from './DessertEntry.module.css';
import { Dessert } from '@/data/desserts.data';

interface DessertEntryProps {
  dessert: Dessert;
}

export const DessertEntry = ({ dessert }: DessertEntryProps) => {
  const { name, hook, dessertDescription, tea, image } = dessert;

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
      <p>{dessertDescription}</p>
      <p><strong>Recommended Tea:</strong> {tea}</p>
    </div>
  </article>;
};