import { DishData } from "@/constants";
import { Dish } from "../Dish";

export const Dishes = ({ dishes }: { dishes: DishData[] }) => {
  return (
    <ul>
      {dishes.map((dish) => (
        <li>
          <Dish key={dish.id} dish={dish} />
        </li>
      ))}
    </ul>
  );
};
