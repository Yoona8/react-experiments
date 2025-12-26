import { IDishesFilter } from '@/data/dishes-filters.data';
import styles from './dish-filter.module.css';

interface DishFilterProps {
  filter: IDishesFilter
  onCheckFlavor: (tag: string, checked: boolean) => void;
}

export const DishFilter = ({ filter, onCheckFlavor }: DishFilterProps) => {
  const { id, name, emoji } = filter;

  return (
    <p className={styles.filter}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name="flavor"
        value={name}
        id={`${id}-filter-flavor`}
        onChange={(evt) => onCheckFlavor(evt.target.value, evt.target.checked)}
      />
      <label className={styles.label} htmlFor={`${id}-filter-flavor`}>
        <span className={styles.icon}>{emoji}</span>
        {name}
      </label>
    </p>
  );
};