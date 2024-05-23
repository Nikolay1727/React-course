import { DishData } from "@/constants";

export const Dish = ({ dish }: { dish: DishData }) => {
  if (!dish) return null;

  return <span>{dish.name}</span>;
};
