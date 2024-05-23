import { DishData } from "@/constants";

export const Dish = ({ dish }: { dish: DishData }) => {
  return <span>{dish.name}</span>;
};
