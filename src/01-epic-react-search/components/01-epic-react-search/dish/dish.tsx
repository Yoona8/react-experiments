import { IDish } from '../../../data/dishes.data';

import './Dish.css';

interface DishProps {
  dish: IDish;
}

export const Dish = ({ dish }: DishProps) => {
  const { name, hook, dishDescription, drink, image } = dish;

  return <article className="dish">
    <img
      src={image}
      alt={name}
      width={2816}
      height={1536}
      className="image"
    />
    <div className="content">
      <h2>{name}</h2>
      <p>{hook}</p>
      <p>{dishDescription}</p>
      <p><strong>Recommended Drink:</strong> {drink}</p>
    </div>
  </article>;
};