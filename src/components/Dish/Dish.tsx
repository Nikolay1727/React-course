import { DishData } from "@/constants";
import { UserContext } from "@/contexts";
import { useCount } from "@/hooks";
import { useContext } from "react";
import { Button } from "../Button";
import { ButtonBlock, Container, Count } from "./styled";

export const Dish = ({ dish }: { dish: DishData }) => {
  const contextUser = useContext(UserContext);

  const { count, increase, decrease } = useCount({});

  if (!dish) return null;

  return (
    <Container>
      {dish.name}
      {contextUser && (
        <ButtonBlock>
          <Button onClick={decrease}>-</Button>
          <Count>{count}</Count>
          <Button onClick={increase}>+</Button>
        </ButtonBlock>
      )}
    </Container>
  );
};
