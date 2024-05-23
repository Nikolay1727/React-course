import { DishData } from "@/constants";
import { Dish } from "../Dish";
import { Container } from "./styled";

export const Menu = ({ menu }: { menu: DishData[] }) => {
  if (!menu?.length) return null;

  return (
    <div>
      <h3>Меню</h3>
      <Container>
        {menu.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} />
          </li>
        ))}
      </Container>
    </div>
  );
};
