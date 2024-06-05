import { Dish } from "../Dish";
import { Container } from "./styled";

export const Menu = ({ dishIds }: { dishIds: string[] }) => {
  if (!dishIds?.length) return null;

  return (
    <div>
      <h3>Меню</h3>
      <Container>
        {dishIds.map((dishId) => (
          <li key={dishId}>
            <Dish dishId={dishId} />
          </li>
        ))}
      </Container>
    </div>
  );
};
