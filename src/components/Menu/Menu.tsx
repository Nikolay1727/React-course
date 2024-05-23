import { DishData } from "@/constants";
import { Dish } from "../Dish";

export const Menu = ({ menu }: { menu: DishData[] }) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menu.map((dish) => (
          <li>
            <Dish key={dish.id} dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
