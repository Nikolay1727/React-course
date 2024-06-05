import { DishNormalizedData } from "@/constants";
import { UserContext } from "@/contexts";
import { useCount } from "@/hooks";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Button } from "../Button";
import { ButtonBlock, Container, Count } from "./styled";

export const Dish = ({ dishId }: { dishId: string }) => {
  const dish: DishNormalizedData = useSelector(
    (state: any) => state.dish.entities[dishId]
  );

  const { user } = useContext(UserContext);

  const { count, increase, decrease } = useCount({});

  if (!dish) return null;

  return (
    <Container>
      {dish.name}
      {user && (
        <ButtonBlock>
          <Button onClick={decrease}>-</Button>
          <Count>{count}</Count>
          <Button onClick={increase}>+</Button>
        </ButtonBlock>
      )}
    </Container>
  );
};
