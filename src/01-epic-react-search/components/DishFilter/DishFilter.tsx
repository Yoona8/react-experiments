import { IDishesFilter } from '@/01-epic-react-search/data/dishes-filters.data';

import './DishFilter.css';

interface DishFilterProps {
  filter: IDishesFilter
  onCheckFlavor: (tag: string, checked: boolean) => void;
}

export const DishFilter = ({ filter, onCheckFlavor }: DishFilterProps) => {
  const { id, name, emoji } = filter;

  return (
    <p className="dish-filter">
      <input
        className="checkbox"
        type="checkbox"
        name="flavor"
        value={name}
        id={`${id}-filter-flavor`}
        onChange={(evt) => onCheckFlavor(evt.target.value, evt.target.checked)}
      />
      <label className="label" htmlFor={`${id}-filter-flavor`}>
        <span className="icon">{emoji}</span>
        {name}
      </label>
    </p>
  );
};