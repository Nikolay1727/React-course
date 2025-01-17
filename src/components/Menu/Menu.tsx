import { Dish } from "../Dish";
import { Container } from "./styled";

export const Menu = ({ dishIds }: { dishIds: string[] }) => {
  if (!dishIds?.length) return null;

  return (
    <div>
      <h3>Меню</h3>
      <Container>
        {dishIds.map((id) => (
          <li key={id}>
            <Dish id={id} />
          </li>
        ))}
      </Container>
    </div>
  );
};
